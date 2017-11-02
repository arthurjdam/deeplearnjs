import {PlatformFramework} from './platform_type_cl';
import {Functions, Method, Type} from './methods_cl';
import * as def from './definitions_cl';

import * as ArrayType from 'ref-array';
import * as ref from 'ref';
import * as ffi from 'ffi';

enum PrecisionType {
    float = 'float',
    double = 'double'
}

export default class CL {
    private cl: any;
    private platform: ref.Type;
    private context: ref.Type;
    private program: ref.Type;
    private kernel: ref.Type;
    private queue: ref.Type;
    private device: ref.Type;
    private static PRECISION = PrecisionType.float;

    constructor() {
        this.cl = new ffi.DynamicLibrary(PlatformFramework[process.platform]);
        Object.keys(Functions).forEach((func) => {
            const info = Functions[func];
            let abi = info[2] && info[2].abi;
            let async = info[2] && info[2].async;
            this.cl[func] = ffi.ForeignFunction(this.cl.get(func), info[0] as string, info[1] as any[], abi);
        });
        //todo @arthurjdam: potentially there could be more platforms, user should be able to select
        this.platform = this.getPlatform()[0];
    }

    private getPlatform(): ArrayType<ref.Type> {
        let err = ref.alloc(Type.ErrorCode);
        let count = ref.alloc('uint');

        err = this.cl[Method.clGetPlatformIDs](0, null, count);

        const nCount = count.deref();
        let ids = new Type.PlatformIdArray(nCount);

        err |= this.cl[Method.clGetPlatformIDs](ids.length, ids, count);

        if (err !== def.cl_errors.CL_SUCCESS) {
            throw new Error('Could not fetch platform');
        }

        return ids;
    }

    getDevices(type: def.cl_device_type = def.cl_device_type.CL_DEVICE_TYPE_GPU): ArrayType<ref.Type> {
        let ids = new (Type.DeviceIdArray)(1);
        let err;
        err = this.cl[Method.clGetDeviceIDs](null, type, 1, ids, null);

        if (err != def.cl_errors.CL_SUCCESS) {
            throw new Error('Failed to create a device group');
        }

        return ids;
    }

    getDeviceInfo(device: Buffer) {
        return {
            name: this._getDeviceInfoParameter(device, def.cl_device_info.CL_DEVICE_NAME),
            vendor: this._getDeviceInfoParameter(device, def.cl_device_info.CL_DEVICE_VENDOR),
            driver_version: this._getDeviceInfoParameter(device, def.cl_device_info.CL_DRIVER_VERSION),
            extensions: this._getDeviceInfoParameter(device, def.cl_device_info.CL_DEVICE_EXTENSIONS).split(' ')
        };
    }

    private _getDeviceInfoParameter(device: Buffer, flag: def.cl_device_info = def.cl_device_info.CL_DEVICE_NAME, method: Method = Method.clGetDeviceInfo) {
        let err;
        let type = ref.coerceType('char');
        let count = ref.alloc('size_t');

        err = this.cl[method](device, flag, 0, null, count);

        const nCount = count.deref();
        const size = nCount / (type.size || ref.sizeof.pointer);
        let buffer = new (new (ArrayType)(type))(size);

        err = this.cl[method](device, flag, nCount, buffer.buffer, null);

        let result = [];
        for (let i = 0; i < size; i++) {
            result.push(buffer[i]);
        }
        return result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join('').trim();
    }

    setDevices(devices: ArrayType<ref.Type>): void {
        let err = ref.alloc(Type.ErrorCode);
        this.context = this.cl[Method.clCreateContext](null, 1, devices, null, null, err);

        if (err.deref() != def.cl_errors.CL_SUCCESS) {
            throw new Error('Failed to create CL context');
        }

        //todo @arthurjdam: handle array of devices
        this.device = devices[0];
        err = ref.alloc(Type.ErrorCode);
        this.queue = this.cl[Method.clCreateCommandQueue](this.context, this.device, 0, err);

        if (!this.queue) {
            throw new Error('Failed to create a command queue');
        }
    }

    setProgram(programSource: string, programName: string): void {
        if(!this.device) {
            console.warn('Warning: no device set, just choosing the first one');
            let device = this.getDevices();
            this.setDevices(device);
        }

        let err = ref.alloc(Type.ErrorCode);
        let src = new (Type.StringArray)(1);
        src[0] = programSource;

        this.program = this.cl[Method.clCreateProgramWithSource](this.context, 1, src, null, err);

        if (!this.program || err.deref() !== def.cl_errors.CL_SUCCESS) {
            throw new Error('Failed to create compute program');
        }

        err = this.cl[Method.clBuildProgram](this.program, 0, null, '-cl-fast-relaxed-math', ref.NULL, null);

        if (err != def.cl_errors.CL_SUCCESS) {
            let size = ref.alloc(ref.types.size_t, 2048).deref();
            let buffer = new (new ArrayType(ref.refType(ref.types.char)))(size);

            this.cl[Method.clGetProgramBuildInfo](this.program, this.device, def.cl_program_build_info.CL_PROGRAM_BUILD_LOG, size, buffer.buffer, null);
            let result = [];
            for (let i = 0; i < size; i++) {
                result.push(buffer.buffer[i]);
            }
            let d = result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join('').trim();
            throw new Error('Program build error: ' + d);
        }

        err = ref.alloc(Type.ErrorCode);
        this.kernel = this.cl[Method.clCreateKernel](this.program, programName, err);

        if (err.deref() != def.cl_errors.CL_SUCCESS) {
            throw new Error('Failed to create compute kernel');
        }
    }

    setBuffers(...buffers:any[]):void {
        const data = new Buffer(16);
        let _buffers:any;
        let err:any;

        buffers.forEach((buffer) =>
        {
            const size = ref.alloc(ref.types.size_t, buffer.size);
            const flag = ref.alloc(ref.types.int, buffer.rw);
            console.log(this.context);
            // const context = ref.alloc(ref.types.size_t, this.context);

            _buffers[buffer.name] = this.cl[Method.clCreateBuffer](this.context, flag, size, ref.NULL, err);
        });

        buffers.filter((buffer) => buffer.rw === def.cl_mem_flags.CL_MEM_WRITE_ONLY).forEach((buffer) =>
        {
            const size = ref.alloc(ref.types.uint, buffer.size);
            err = this.cl[Method.clEnqueueWriteBuffer](this.queue, _buffers[buffer.name], def.cl_bool.CL_TRUE, ref.alloc(ref.types.uint, 0), size, data, 0, null, null);
        });

        buffers.forEach((buffer, index) =>
        {
            err = this.cl[Method.clSetKernelArg](this.kernel, index, buffer.type.size, _buffers[buffer.name].ref());
        });

        let _global = ref.types.SizeTArray(1);
        _global[0] = 1024;
        err = this.cl[Method.clEnqueueNDRangeKernel](this.queue, this.kernel, 1, ref.NULL, _global, null, 0, null, null);
    }

    scope():void {
        this.cl[Method.clFinish](this.queue);
        // err = cl[Method.clEnqueueReadBuffer](commands, output, def.cl_bool.CL_TRUE, 0, ref.types[precision].size * count, results /!* pointer *!/, 0, null, null);
    }

    dispose() {
        if (this.program) this.cl[Method.clReleaseProgram](this.program);
        if (this.kernel) this.cl[Method.clReleaseKernel](this.kernel);
        if (this.queue) this.cl[Method.clReleaseCommandQueue](this.queue);
        if (this.context) this.cl[Method.clReleaseContext](this.context);
    }

    // buildProgram
    // createBuffer
    // clEnqueueWriteBuffer
    //clSetKernelArg
    //clEnqueueNDRangeKernel
    //clFinish
    //clEnqueueReadBuffer
}

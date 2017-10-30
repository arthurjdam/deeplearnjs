import * as fastcall from 'fastcall';
import { ref, ffi } from 'fastcall';
import * as def from './definitions';
import CL_Device from './cl_device';
import CL_Context from './cl_context';
import CL_Command_Queue from './cl_command_queue'

enum Platform {
    win32 = 'win32',
    darwin = 'darwin',
    linux = 'linux'
}

export enum Method {
    clGetPlatformIDs = 'clGetPlatformIDs',
    clGetPlatformInfo = 'clGetPlatformInfo',
    clGetDeviceIDs = 'clGetDeviceIDs',
    clGetDeviceInfo = 'clGetDeviceInfo',
    clCreateContext = 'clCreateContext',
    clCreateBuffer = 'clCreateBuffer',
    clCreateCommandQueue = 'clCreateCommandQueue',
    clReleaseCommandQueue = 'clReleaseCommandQueue',
    clEnqueueWriteBuffer = 'clEnqueueWriteBuffer',
    clSetKernelArg = 'clSetKernelArg',
    clGetKernelWorkGroupInfo = 'clGetKernelWorkGroupInfo',
    clEnqueueNDRangeKernel = 'clEnqueueNDRangeKernel',
    clEnqueueReadBuffer = 'clEnqueueReadBuffer',
    clFinish = 'clFinish',
    clCreateProgramWithSource = 'clCreateProgramWithSource',
    clBuildProgram = 'clBuildProgram',
    clGetProgramBuildInfo = 'clGetProgramBuildInfo',
    clCreateKernel = 'clCreateKernel',
    clReleaseMemObject = 'clReleaseMemObject',
    clReleaseProgram = 'clReleaseProgram',
    clReleaseKernel = 'clReleaseKernel',
    clReleaseContext = 'clReleaseContext'
}

const framework = {
    [Platform.win32]: 'OpenCL',
    [Platform.darwin]: '/System/Library/Frameworks/OpenCL.framework/OpenCL',
    [Platform.linux]: 'libOpenCL.so'
};

export const types = {
    Bool: ref.types.uint,
    Pointer: 'pointer',
    PlatformIdArray: new fastcall.ArrayType(ref.refType('void')),
    PlatformId: ref.refType('void'),
    PlatformInfo: ref.types.uint,
    DeviceId: ref.refType('void'),
    DeviceIdArray: new fastcall.ArrayType(ref.refType('void')),
    DeviceType: ref.types.uint64,
    DeviceInfo: ref.types.uint,
    Context: ref.refType('void'),
    ContextProperties: new fastcall.ArrayType('size_t'),
    CreateContextNotify: ffi.Function('void', [ 'pointer', 'pointer' ]),
    ErrorCodeRet: ref.refType('int'),
    ErrorCode: ref.types.int,
    Mem: ref.refType('void'),
    MemFlags: ref.types.uint64,
    CommandQueue: ref.refType('void'),
    CommandQueueProperties: ref.types.uint64,
    EventArray: new fastcall.ArrayType(ref.refType('void')),
    EventRef: ref.refType(ref.refType('void')),
    Kernel: ref.refType("void"),
    KernelArray: new fastcall.ArrayType(ref.refType("void")),
    KernelInfo: ref.types.uint,
    KernelArgInfo: ref.types.uint,
    KernelArgAddressQualifier: ref.types.uint,
    KernelArgAccessQualifier: ref.types.uint,
    KernelArgTypeQualifier: ref.types.uint64,
    KernelWorkGroupInfo: ref.types.uint,
    SizeTArray: new fastcall.ArrayType("size_t"),
    StringArray: new fastcall.ArrayType("string"),
    Program: ref.refType('void'),
    BuildProgramNotify: ffi.Function("void", [ "pointer", "pointer" ]),
    ProgramBuildInfo: ref.types.uint,
};


export default class CL_Platform {
    private static _instance:CL_Platform;
    public library:ffi.Library;
    private _platform:Buffer;
    private _devices:ReadonlyArray<CL_Device>;
    private _context:CL_Context;
    private _queue:CL_Command_Queue;

    constructor() {
        if(new Function('try {return this===window;}catch(e){ return false;}')()) {
            throw new Error('OpenCL platform is only available while running headless (NodeJS) mode');
        }
    }

    construct() {
        this.library = new ffi.Library(framework[process.platform], {
            [Method.clReleaseCommandQueue]: [
                'int', [types.CommandQueue]],
            [Method.clReleaseMemObject]: [
                'int', [types.Mem]
            ],
            [Method.clReleaseProgram]: [
                'int', [types.Program]
            ],
            [Method.clReleaseKernel]: [
                'int', [types.Kernel]
            ],
            [Method.clReleaseContext]: [
                'int', [types.Context]
            ],
            [Method.clGetPlatformIDs]: [
                ref.types.int, [
                    ref.types.uint,
                    types.PlatformIdArray,
                    ref.refType(ref.types.uint)]],
            [Method.clGetPlatformInfo]: [
                ref.types.int, [
                    types.PlatformId,
                    types.PlatformInfo,
                    ref.types.size_t,
                    types.Pointer,
                    ref.refType(fastcall.ref.types.size_t)]],
            [Method.clGetDeviceIDs]: [
                ref.types.int, [
                    types.PlatformId,
                    types.DeviceType,
                    ref.types.uint,
                    types.DeviceIdArray,
                    ref.refType(fastcall.ref.types.uint)]],
            [Method.clGetDeviceInfo]: [
                ref.types.int, [
                    types.PlatformId,
                    types.DeviceInfo,
                    ref.types.size_t,
                    types.Pointer,
                    ref.refType(fastcall.ref.types.size_t)]],
            [Method.clCreateContext]: [
                types.Pointer, [
                    types.ContextProperties,
                    ref.types.uint,
                    types.DeviceIdArray,
                    ref.refType(types.CreateContextNotify),
                    types.Pointer,
                    types.ErrorCodeRet]],
            [Method.clCreateBuffer]: [
                types.Mem, [
                    types.Context,
                    types.MemFlags,
                    'size_t',
                    types.Pointer,
                    types.ErrorCodeRet]],
            [Method.clCreateCommandQueue]: [
                types.CommandQueue, [
                    types.Context,
                    types.DeviceId,
                    types.CommandQueueProperties,
                    types.ErrorCodeRet]],
            [Method.clEnqueueWriteBuffer]: [
                'int', [
                    types.CommandQueue,
                    types.Mem,
                    types.Bool,
                    'size_t',
                    'size_t',
                    'pointer',
                    'uint',
                    types.EventArray,
                    types.EventRef
                ]],
            [Method.clSetKernelArg]: [
                'int', [
                    types.Kernel,
                    'uint',
                    'size_t',
                    'pointer']],
            [Method.clGetKernelWorkGroupInfo]: [
                'int', [
                    types.Kernel,
                    types.DeviceId,
                    types.KernelWorkGroupInfo,
                    'size_t',
                    'pointer',
                    ref.refType('size_t')]],
            // cl_command_queue command_queue,
            // cl_kernel kernel,
            // cl_uint work_dim,
            // const size_t *global_work_offset,
            // const size_t *global_work_size,
            // const size_t *local_work_size,
            // cl_uint num_events_in_wait_list,
            // const cl_event *event_wait_list,
            // cl_event *event)
            [Method.clEnqueueNDRangeKernel]: [
                'int', [
                    types.CommandQueue,
                    types.Kernel,
                    'uint',
                    types.SizeTArray,
                    // 'size_t',
                    // ref.refType('size_t'),
                    types.SizeTArray,
                    // 'size_t',
                    // ref.refType('size_t'),
                    types.SizeTArray,
                    // 'size_t',
                    // ref.refType('size_t'),
                    'uint',
                    types.EventArray,
                    types.EventRef]],
            [Method.clEnqueueReadBuffer]: [
                'int', [
                    types.CommandQueue,
                    types.Mem,
                    types.Bool,
                    'size_t',
                    'size_t',
                    'pointer',
                    'uint',
                    types.EventArray,
                    types.EventRef]],
            [Method.clFinish]: [
                'int', [
                    types.CommandQueue]],
            [Method.clCreateProgramWithSource]: [
                types.Program, [
                    types.Context,
                    "uint",
                    types.StringArray,
                    types.SizeTArray,
                    ref.refType("int")]],
            [Method.clBuildProgram]: [
                "int", [
                    types.Program,
                    "uint",
                    types.DeviceIdArray,
                    "string",
                    types.BuildProgramNotify,
                    "pointer"]],
            [Method.clGetProgramBuildInfo]: [
                "int", [
                    types.Program,
                    types.DeviceId,
                    types.ProgramBuildInfo,
                    "size_t",
                    "pointer",
                    ref.refType("size_t")]],
            [Method.clCreateKernel]: [
                types.Kernel, [
                    types.Program,
                    "string",
                    ref.refType("int")]],
        });

        this._platform = this._getPlatforms()[0];
        // this._devices = this._getDevices(def.cl_device_type.CL_DEVICE_TYPE_ALL);
    }

    static instance():CL_Platform {
        return this._instance || (this._instance = new this());
    }

    private _getPlatforms():ReadonlyArray<Buffer> {
        let err;
        let count = ref.alloc('uint');

        err = this.library[Method.clGetPlatformIDs](0, null, count);

        const nCount = count.deref();
        let ids = new (types.PlatformIdArray)(nCount);

        err = this.library[Method.clGetPlatformIDs](ids.length, ids, count);

        let result = [];
        for (let i = 0; i < nCount; i++) {
            result.push(ids.get(i));
        }

        return result;
    }

    private _getDevices(type:def.cl_device_type = def.cl_device_type.CL_DEVICE_TYPE_ALL):ReadonlyArray<CL_Device> {
        let err;
        let count = ref.alloc('uint');

        err = this.library[Method.clGetDeviceIDs](this._platform, type, 0, null, count);

        const nCount = count.deref();
        let ids = new (types.DeviceIdArray)(nCount);

        err = this.library[Method.clGetDeviceIDs](this._platform, type, nCount, ids, null);

        let result = [];
        for (let i = 0; i < nCount; i++) {
            result.push(new CL_Device(ids.get(i)));
        }
        return result;
    }

    getPlatform() {
        return this._platform;
    }

    getDevices():ReadonlyArray<CL_Device> {
        return this._devices;
    }

    setDevices(devices:ReadonlyArray<CL_Device>):any {
        let _devices = new (types.DeviceIdArray)(devices.length);
        for(let i = 0; i < devices.length; ++i)
        {
            _devices.set(devices[i].id);
        }
        return _devices;

    }

    setDevice(device:CL_Device):void {
        this._context = new CL_Context(device.id);
        this._queue = new CL_Command_Queue(this._context);
    }

    getContext():CL_Context {
        return this._context;
    }
}

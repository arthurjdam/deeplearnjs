import * as fastcall from 'fastcall';
import { ref, ffi } from 'fastcall';
import * as def from './definitions';
import CL_Device from './cl_device';

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
    clCreateBuffer = 'clCreateBuffer'
}

const framework = {
    [Platform.win32]: 'OpenCL',
    [Platform.darwin]: '/System/Library/Frameworks/OpenCL.framework/OpenCL',
    [Platform.linux]: 'libOpenCL.so'
};

export const types = {
    Pointer: 'pointer',
    PlatformIdArray: new fastcall.ArrayType(ref.refType('void')),
    PlatformId: ref.refType('void'),
    PlatformInfo: ref.types.uint,
    DeviceId: ref.refType('void'),
    DeviceIdArray: new fastcall.ArrayType(ref.refType('void')),
    DeviceType: ref.types.uint64,
    DeviceInfo: ref.types.uint,
    ContextProperties: new fastcall.ArrayType("size_t"),
    CreateContextNotify: ffi.Function("void", [ "pointer", "pointer" ]),
    ErrorCodeRet: ref.refType("int"),
    ErrorCode: ref.types.int,
    Mem: ref.refType("void"),
    MemFlags: ref.types.uint64,
    Context: ref.refType("void"),
};


export default class CL_Platform {
    private static _instance:CL_Platform;
    public library:ffi.Library;
    private _platform:Buffer;
    private _devices:ReadonlyArray<CL_Device>;

    constructor() {
        if(new Function('try {return this===window;}catch(e){ return false;}')()) {
            throw new Error('OpenCL platform is only available in NodeJS mode');
        }
    }

    construct() {
        this.library = new ffi.Library(framework[process.platform], {
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
                    ref.refType('int')]],

    });

        this._platform = this._getPlatforms()[0];
        this._devices = this._getDevices(def.cl_device_type.CL_DEVICE_TYPE_ALL);
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

    getDevices():ReadonlyArray<CL_Device> {
        return this._devices;
    }
}

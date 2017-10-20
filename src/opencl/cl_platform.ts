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
    clGetDeviceInfo = 'clGetDeviceInfo'
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
};


export default class CL_Platform {
    private static _instance: CL_Platform;
    public library:ffi.Library;
    private platform:Buffer;
    private devices:ReadonlyArray<CL_Device>;

    constructor() {

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
        });

        this.platform = this.getPlatforms()[0];
        this.devices = this.getDevices(def.cl_device_type.CL_DEVICE_TYPE_ALL);
        console.log(this.devices);
    }

    static instance():CL_Platform {
        return this._instance || (this._instance = new this());
    }

    getPlatforms():ReadonlyArray<Buffer> {
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

    getDevices(type:def.cl_device_type = def.cl_device_type.CL_DEVICE_TYPE_ALL):ReadonlyArray<CL_Device> {
        let err;
        let count = ref.alloc('uint');

        err = this.library[Method.clGetDeviceIDs](this.platform, type, 0, null, count);

        const nCount = count.deref();
        let ids = new (types.DeviceIdArray)(nCount);


        err = this.library[Method.clGetDeviceIDs](this.platform, type, nCount, ids, null);

        let result = [];
        for (let i = 0; i < nCount; i++) {
            result.push(new CL_Device(ids.get(i)));
        }
        return result;
    }
}

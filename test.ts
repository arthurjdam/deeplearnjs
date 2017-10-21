import CL_Platform from './src/opencl/cl_platform';
// import CL_Program from './src/opencl/cl_program';
import CL_Context from './src/opencl/cl_context';

CL_Platform.instance().construct();
let a = new CL_Context([CL_Platform.instance().getDevices()[0]]);


/*
import * as fastcall from 'fastcall';
import {
    cl_device_info,
    cl_device_type,
    cl_platform_info
} from './src/math/opencl/definitions';

const ref = fastcall.ref;

const ffi = fastcall.ffi;

enum Platform {
    win32 = 'win32',
    darwin = 'darwin',
    linux = 'linux'
}

const framework = {
    [Platform.win32]: 'OpenCL',
    [Platform.darwin]: '/System/Library/Frameworks/OpenCL.framework/OpenCL',
    [Platform.linux]: 'libOpenCL.so'
};

const types = {
    PlatformIdArray: new fastcall.ArrayType(ref.refType('void')),
    PlatformId: ref.refType('void'),
    PlatformInfo: ref.types.uint,
    DeviceId: ref.refType('void'),
    DeviceIdArray: new fastcall.ArrayType(ref.refType('void')),
    DeviceType: ref.types.uint64,
    DeviceInfo: ref.types.uint,
};

let library = new ffi.Library(framework[process.platform], {
    clGetPlatformIDs: [ref.types.int, [ref.types.uint, types.PlatformIdArray, ref.refType(ref.types.uint)]],
    clGetPlatformInfo: [ref.types.int, [types.PlatformId, types.PlatformInfo, ref.types.size_t, 'pointer', ref.refType(ref.types.size_t)]],
    clGetDeviceIDs: [ref.types.int, [types.PlatformId, types.DeviceType, ref.types.uint, types.DeviceIdArray, ref.refType(ref.types.uint)]],
    clGetDeviceInfo: [ref.types.int, [types.PlatformId, types.DeviceInfo, ref.types.size_t, 'pointer', ref.refType(ref.types.size_t)]],
});

const platforms = getPlatformIds(library);
const devices = getDeviceIds(library, platforms[0]);
console.log('device info', getInfo(library, devices[0], 'clGetDeviceInfo', cl_device_info.CL_DEVICE_NAME));
console.log('platform info', getInfo(library, platforms[0], 'clGetPlatformInfo', cl_platform_info.CL_PLATFORM_NAME));

function getInfo(library: fastcall.ffi.Library, platform: Buffer, method: string, flag: number): string {
    let err;
    let type = ref.coerceType('char');
    let count = ref.alloc('size_t');

    err = library[method](platform, flag, 0, null, count);

    const nCount = count.deref();
    const size = nCount / (type.size || ref.sizeof.pointer);
    let buffer = new (new (fastcall.ArrayType)(type))(size);

    err = library[method](platform, flag, nCount, buffer.buffer, null);

    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(buffer.get(i));
    }
    return result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join('').trim();
}

function getPlatformIds(library: fastcall.ffi.Library, method: string = 'clGetPlatformIDs', type: any = types.PlatformIdArray): Array<Buffer> {
    let err;
    let count = ref.alloc('uint');

    err = library[method](0, null, count);

    const nCount = count.deref();
    let ids = new (type)(nCount);

    err = library[method](ids.length, ids, count);

    let result = [];
    for (let i = 0; i < nCount; i++) {
        result.push(ids.get(i));
    }

    return result;
}

function getDeviceIds(library: fastcall.ffi.Library, platform: Buffer, method: string = 'clGetDeviceIDs', type: any = types.DeviceIdArray, flag: number = cl_device_type.CL_DEVICE_TYPE_ALL): Array<Buffer> {
    let err;
    let count = ref.alloc('uint');

    err = library[method](platform, flag, 0, null, count);

    const nCount = count.deref();
    let ids = new (type)(nCount);

    err = library[method](platform, flag, nCount, ids, null);

    let result = [];
    for (let i = 0; i < nCount; i++) {
        result.push(ids.get(i));
    }
    return result;
}
*/

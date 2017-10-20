import {NDArrayMathCPU} from './src/math/math_cpu';
// import {NDArrayMathCL} from './src/math/math_cl';
import {Array2D} from './src/math/ndarray';
import * as fastcall from 'fastcall';
// import { CLHost, CLContext, CLBuffer, CLCommandQueue, NDRange, CLError, CLKernel } from 'nooocl';
// import { CLHost } from 'nooocl';
// import * as cl_util from './src/math/opencl/cl_util';

let math = new NDArrayMathCPU();
// console.log(math);

const a = Array2D.new([2, 3], [1, 2, 3, 4, 5, 6]);
const b = Array2D.new([3, 2], [0, 1, -3, 2, 2, 1]);
const c = math.matMul(a, b);
console.log(c);

// console.log(NDArrayMathCL);

// let _clMath = new NDArrayMathCL();
// console.log(_clMath);
// console.log(_clMath.matMul(a, b));
//
// const host = CLHost.createV11();
// const platforms = host.getPlatforms();
// console.log(host.cl.defs.CL_ARGB);
//
// console.log('asdf');
// console.log(platforms.length);
//
// for(let i = 0; i < platforms.length; ++i)
// {
//     console.log(platforms[i].extensions);
//     console.log(platforms[i].allDevices()[0].minDataTypeAlignSize);
// }

// let clMath = new NDArrayMathCL();
// console.log(clMath.host);

// clMath.setDevice(clMath.getDevices(cl_util.DeviceType.gpu)[0]);
// CLHost.types.
// clMath.start();

// console.log(clMath.matMul(a, b));


// console.log(clMath.devices[0].platform.name);
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

// let d = new fastcall.Disposable.Legacy(() => { console.log('asdf'); });
// console.log(d._classInfoFunction);

const types = {
    PlatformIdArray: new fastcall.ArrayType(ref.refType("void")),
    PlatformId: ref.refType("void"),
    PlatformInfo: ref.types.uint,
    DeviceId: ref.refType("void"),
    DeviceIdArray: new fastcall.ArrayType(ref.refType("void")),
    DeviceType: ref.types.uint64,
    DeviceInfo: ref.types.uint,
};

let library = new ffi.Library(framework[process.platform], {
    clGetPlatformIDs: [ref.types.int, [ref.types.uint, types.PlatformIdArray, ref.refType(ref.types.uint)]],
    clGetPlatformInfo: [ref.types.int, [types.PlatformId, types.PlatformInfo, ref.types.size_t, "pointer", ref.refType(ref.types.size_t)]],
    clGetDeviceIDs: [ref.types.int, [types.PlatformId, types.DeviceType, ref.types.uint, types.DeviceIdArray, ref.refType(ref.types.uint)]],
    clGetDeviceInfo: [ref.types.int, [types.PlatformId, types.DeviceInfo, ref.types.size_t, "pointer", ref.refType(ref.types.size_t)]],
});

let count = ref.alloc("uint");
library.clGetPlatformIDs(0, null, count);
let nCount = count.deref();
let err;

console.log(new fastcall.ArrayType(ref.refType("void")));
let platformIds = new (types.PlatformIdArray)(nCount);
err = library.clGetPlatformIDs(platformIds.length, platformIds, count);

let platforms = [];

for (let i = 0; i < nCount; i++) {
    platforms.push(platformIds.get(i));
}

// let elemType = ref.coerceType('char');
// let needed = ref.alloc('size_t');

const cl_platform_info = {
    CL_PLATFORM_PROFILE:            0x0900,
    CL_PLATFORM_VERSION:            0x0901,
    CL_PLATFORM_NAME:               0x0902,
    CL_PLATFORM_VENDOR:             0x0903,
    CL_PLATFORM_EXTENSIONS:         0x0904,
};

const cl_device_type = {
    CL_DEVICE_TYPE_DEFAULT:         1 << 0,
    CL_DEVICE_TYPE_CPU:             1 << 1,
    CL_DEVICE_TYPE_GPU:             1 << 2,
    CL_DEVICE_TYPE_ACCELERATOR:     1 << 3,
    CL_DEVICE_TYPE_CUSTOM:          1 << 4,
    CL_DEVICE_TYPE_ALL:             0xFFFFFFFF,
};

const cl_device_info = {
    CL_DEVICE_TYPE:                 0x1000,
    CL_DEVICE_VENDOR_ID:            0x1001,
    CL_DEVICE_MAX_COMPUTE_UNITS:    0x1002,
    CL_DEVICE_MAX_WORK_ITEM_DIMENSIONS: 0x1003,
    CL_DEVICE_MAX_WORK_GROUP_SIZE:  0x1004,
    CL_DEVICE_MAX_WORK_ITEM_SIZES:  0x1005,
    CL_DEVICE_PREFERRED_VECTOR_WIDTH_CHAR: 0x1006,
    CL_DEVICE_PREFERRED_VECTOR_WIDTH_SHORT: 0x1007,
    CL_DEVICE_PREFERRED_VECTOR_WIDTH_INT: 0x1008,
    CL_DEVICE_PREFERRED_VECTOR_WIDTH_LONG: 0x1009,
    CL_DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT: 0x100A,
    CL_DEVICE_PREFERRED_VECTOR_WIDTH_DOUBLE: 0x100B,
    CL_DEVICE_MAX_CLOCK_FREQUENCY:  0x100C,
    CL_DEVICE_ADDRESS_BITS:         0x100D,
    CL_DEVICE_MAX_READ_IMAGE_ARGS:  0x100E,
    CL_DEVICE_MAX_WRITE_IMAGE_ARGS: 0x100F,
    CL_DEVICE_MAX_MEM_ALLOC_SIZE:   0x1010,
    CL_DEVICE_IMAGE2D_MAX_WIDTH:    0x1011,
    CL_DEVICE_IMAGE2D_MAX_HEIGHT:   0x1012,
    CL_DEVICE_IMAGE3D_MAX_WIDTH:    0x1013,
    CL_DEVICE_IMAGE3D_MAX_HEIGHT:   0x1014,
    CL_DEVICE_IMAGE3D_MAX_DEPTH:    0x1015,
    CL_DEVICE_IMAGE_SUPPORT:        0x1016,
    CL_DEVICE_MAX_PARAMETER_SIZE:   0x1017,
    CL_DEVICE_MAX_SAMPLERS:         0x1018,
    CL_DEVICE_MEM_BASE_ADDR_ALIGN:  0x1019,
    CL_DEVICE_MIN_DATA_TYPE_ALIGN_SIZE: 0x101A,
    CL_DEVICE_SINGLE_FP_CONFIG:     0x101B,
    CL_DEVICE_GLOBAL_MEM_CACHE_TYPE: 0x101C,
    CL_DEVICE_GLOBAL_MEM_CACHELINE_SIZE: 0x101D,
    CL_DEVICE_GLOBAL_MEM_CACHE_SIZE: 0x101E,
    CL_DEVICE_GLOBAL_MEM_SIZE:      0x101F,
    CL_DEVICE_MAX_CONSTANT_BUFFER_SIZE: 0x1020,
    CL_DEVICE_MAX_CONSTANT_ARGS:    0x1021,
    CL_DEVICE_LOCAL_MEM_TYPE:       0x1022,
    CL_DEVICE_LOCAL_MEM_SIZE:       0x1023,
    CL_DEVICE_ERROR_CORRECTION_SUPPORT: 0x1024,
    CL_DEVICE_PROFILING_TIMER_RESOLUTION: 0x1025,
    CL_DEVICE_ENDIAN_LITTLE:        0x1026,
    CL_DEVICE_AVAILABLE:            0x1027,
    CL_DEVICE_COMPILER_AVAILABLE:   0x1028,
    CL_DEVICE_EXECUTION_CAPABILITIES: 0x1029,
    CL_DEVICE_QUEUE_PROPERTIES:     0x102A,
    CL_DEVICE_NAME:                 0x102B,
    CL_DEVICE_VENDOR:               0x102C,
    CL_DRIVER_VERSION:              0x102D,
    CL_DEVICE_PROFILE:              0x102E,
    CL_DEVICE_VERSION:              0x102F,
    CL_DEVICE_EXTENSIONS:           0x1030,
    CL_DEVICE_PLATFORM:             0x1031,
    CL_DEVICE_DOUBLE_FP_CONFIG:     0x1032
};

// err = library.clGetPlatformInfo(platforms[0], cl_platform_info.CL_PLATFORM_EXTENSIONS, 0, null, needed);
//
// let nNeeded = needed.deref();
// // var elemSize = elemType.size || ref.sizeof.pointer;
// var bufferSize = nNeeded / (elemType.size || ref.sizeof.pointer);
// var ElemTypeArray = new (fastcall.ArrayType)(elemType);
// var buffer = new (ElemTypeArray)(bufferSize);
// err = library.clGetPlatformInfo(platforms[0], cl_platform_info.CL_PLATFORM_EXTENSIONS, nNeeded, buffer.buffer, null);
//
// var result = [];
// for (let i = 0; i < bufferSize; i++) {
//     result.push(buffer.get(i));
// }
// console.log('needed', needed);
// console.log('result', result);
// console.log(result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join("").trim());

// console.log('platform ids', getPlatformIds(library));
const devices = getDeviceIds(library, platforms[0]);
console.log('device info', getInfo(library, devices[1], 'clGetDeviceInfo', cl_device_info.CL_DEVICE_NAME));
//asdf
console.log('platform info', getInfo(library, platforms[0],'clGetPlatformInfo', cl_platform_info.CL_PLATFORM_NAME));

// console.log(getInfo(library, platforms[0],'clGetDeviceIDs', cl_device_type.CL_DEVICE_TYPE_GPU));

function getInfo(library:fastcall.ffi.Library, platform:number, method:string, flag:number):string
{
    let err;
    let elemType = ref.coerceType('char');
    let needed = ref.alloc('size_t');

    err = library[method](platform, flag, 0, null, needed);

    const nNeeded = needed.deref();
    const size = nNeeded / (elemType.size || ref.sizeof.pointer);
    let buffer = new (new (fastcall.ArrayType)(elemType))(size);

    err = library[method](platform, flag, nNeeded, buffer.buffer, null);

    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(buffer.get(i));
    }
    return result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join("").trim();
}

function getPlatformIds(library:fastcall.ffi.Library, method:string = 'clGetPlatformIDs', type:any = types.PlatformIdArray):Array<Buffer>
{
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

function getDeviceIds(library:fastcall.ffi.Library, platform:number, method:string = 'clGetDeviceIDs', type:any = types.DeviceIdArray, flag:number = cl_device_type.CL_DEVICE_TYPE_ALL):Array<Buffer>
{
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





/*

console.log(_getStringInfo(0x0902));




function _infoFunction(handle:any, infoName:string, n, m, o) {

}

function _getArrayInfo(elemType:string, infoName:number):Array<any> {
    elemType = ref.coerceType(elemType);

    var needed = ref.alloc('size_t');
    var err = _infoFunction(self.handle, infoName, 0, null, needed);

    var nNeeded = needed.deref();

    if (nNeeded === 0) {
        // e.g. CL_CONTEXT_PROPERTIES can return needed = 0
        return null;
    }

    var elemSize = elemType.size || ref.sizeof.pointer;
    var bufferSize = nNeeded / elemSize;
    var ElemTypeArray = new (fastcall.ArrayType)(elemType);
    var buffer = new ElemTypeArray(bufferSize);

    err = _infoFunction(self.handle, infoName, nNeeded, buffer.buffer, null);

    var result = [];
    for (let i = 0; i < bufferSize; i++) {
        result.push(buffer.get(i));
    }

    return result;
}

function _getStringInfo(infoName:number) {
    let arr = _getArrayInfo('char', infoName);
    return arr.filter((code:any) => code > 0).map((code:any) => String.fromCharCode(code)).join("").trim();
}
*/


// let libName = '';
// switch (process.platform) {
//     case 'win32':
//         libName = 'OpenCL';
//         break;
//     case 'darwin':
//         libName = ;
//         break;
//     default:
//         libName = 'libOpenCL.so';
// }


import * as ArrayType from 'ref-array';
import * as ref from 'ref';
import * as ffi from 'ffi';

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
};

export const Type = {
    Bool: ref.types.uint,
    Pointer: 'pointer',
    PlatformIdArray: ArrayType(ref.refType('void')),
    PlatformId: ref.refType('void'),
    PlatformInfo: ref.types.uint,
    DeviceId: ref.refType('void'),
    DeviceIdArray: ArrayType(ref.refType('void')),
    DeviceType: ref.types.uint64,
    DeviceInfo: ref.types.uint,
    Context: ref.refType('void'),
    ContextProperties: ArrayType('size_t'),
    CreateContextNotify: ffi.Function('void', [ 'pointer', 'pointer' ]),
    ErrorCodeRet: ref.refType('int'),
    ErrorCode: ref.types.int,
    Mem: ref.refType('void'),
    MemFlags: ref.types.uint64,
    CommandQueue: ref.refType('void'),
    CommandQueueProperties: ref.types.uint64,
    EventArray: ArrayType(ref.refType('void')),
    EventRef: ref.refType(ref.refType('void')),
    Kernel: ref.refType('void'),
    KernelArray: ArrayType(ref.refType('void')),
    KernelInfo: ref.types.uint,
    KernelArgInfo: ref.types.uint,
    KernelArgAddressQualifier: ref.types.uint,
    KernelArgAccessQualifier: ref.types.uint,
    KernelArgTypeQualifier: ref.types.uint64,
    KernelWorkGroupInfo: ref.types.uint,
    SizeTArray: ArrayType('size_t'),
    StringArray: ArrayType('string'),
    Program: ref.refType('void'),
    BuildProgramNotify: ffi.Function('void', [ 'pointer', 'pointer' ]),
    ProgramBuildInfo: ref.types.uint,
};

export const Functions = {
    [Method.clReleaseCommandQueue]: [
        'int', [Type.CommandQueue]],
    [Method.clReleaseMemObject]: [
        'int', [Type.Mem]
    ],
    [Method.clReleaseProgram]: [
        'int', [Type.Program]
    ],
    [Method.clReleaseKernel]: [
        'int', [Type.Kernel]
    ],
    [Method.clReleaseContext]: [
        'int', [Type.Context]
    ],
    [Method.clGetPlatformIDs]: [
        ref.types.int, [
            ref.types.uint,
            Type.PlatformIdArray,
            ref.refType(ref.types.uint)]],
    [Method.clGetPlatformInfo]: [
        ref.types.int, [
            Type.PlatformId,
            Type.PlatformInfo,
            ref.types.size_t,
            Type.Pointer,
            ref.refType(ref.types.size_t)]],
    [Method.clGetDeviceIDs]: [
        ref.types.int, [
            Type.PlatformId,
            Type.DeviceType,
            ref.types.uint,
            Type.DeviceIdArray,
            ref.refType(ref.types.uint)]],
    [Method.clGetDeviceInfo]: [
        ref.types.int, [
            Type.PlatformId,
            Type.DeviceInfo,
            ref.types.size_t,
            Type.Pointer,
            ref.refType(ref.types.size_t)]],
    [Method.clCreateContext]: [
        Type.Pointer, [
            Type.ContextProperties,
            ref.types.uint,
            Type.DeviceIdArray,
            ref.refType(Type.CreateContextNotify),
            Type.Pointer,
            Type.ErrorCodeRet]],
    [Method.clCreateBuffer]: [
        Type.Mem, [
            Type.Context,
            Type.MemFlags,
            'size_t',
            Type.Pointer,
            Type.ErrorCodeRet]],
    [Method.clCreateCommandQueue]: [
        Type.CommandQueue, [
            Type.Context,
            Type.DeviceId,
            Type.CommandQueueProperties,
            Type.ErrorCodeRet]],
    [Method.clEnqueueWriteBuffer]: [
        'int', [
            Type.CommandQueue,
            Type.Mem,
            Type.Bool,
            'size_t',
            'size_t',
            'pointer',
            'uint',
            Type.EventArray,
            Type.EventRef
        ]],
    [Method.clSetKernelArg]: [
        'int', [
            Type.Kernel,
            'uint',
            'size_t',
            'pointer']],
    [Method.clGetKernelWorkGroupInfo]: [
        'int', [
            Type.Kernel,
            Type.DeviceId,
            Type.KernelWorkGroupInfo,
            'size_t',
            'pointer',
            ref.refType('size_t')]],
    [Method.clEnqueueNDRangeKernel]: [
        'int', [
            Type.CommandQueue,
            Type.Kernel,
            'uint',
            Type.SizeTArray,
            Type.SizeTArray,
            Type.SizeTArray,
            'uint',
            Type.EventArray,
            Type.EventRef]],
    [Method.clEnqueueReadBuffer]: [
        'int', [
            Type.CommandQueue,
            Type.Mem,
            Type.Bool,
            'size_t',
            'size_t',
            'pointer',
            'uint',
            Type.EventArray,
            Type.EventRef]],
    [Method.clFinish]: [
        'int', [
            Type.CommandQueue]],
    [Method.clCreateProgramWithSource]: [
        Type.Program, [
            Type.Context,
            'uint',
            Type.StringArray,
            Type.SizeTArray,
            ref.refType('int')]],
    [Method.clBuildProgram]: [
        'int', [
            Type.Program,
            'uint',
            Type.DeviceIdArray,
            'string',
            Type.BuildProgramNotify,
            'pointer']],
    [Method.clGetProgramBuildInfo]: [
        'int', [
            Type.Program,
            Type.DeviceId,
            Type.ProgramBuildInfo,
            'size_t',
            'pointer',
            ref.refType('size_t')]],
    [Method.clCreateKernel]: [
        Type.Kernel, [
            Type.Program,
            'string',
            ref.refType('int')]]
};

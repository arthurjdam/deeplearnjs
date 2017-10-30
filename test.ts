import CL_Platform from './src/opencl/cl_platform';
import { Method, types } from './src/opencl/cl_platform';
// import CL_Context from './src/opencl/cl_context';
// import CL_Command_Queue from './src/opencl/cl_command_queue';
// import CL_Buffer from './src/opencl/cl_buffer';
import * as fastcall from 'fastcall';
import { ref } from 'fastcall';
import * as def from './src/opencl/definitions';

const vecAdd = `#pragma OPENCL EXTENSION cl_khr_fp64 : enable
__kernel void square(
   __global float* input,
   __global float* output,
   const unsigned int count)
{
   int i = get_global_id(0);
   if(i < count)
       output[i] = input[i] * input[i];
}`;

const count = 1024;

let global = ref.alloc('size_t');
let local = ref.alloc('size_t');

let err = ref.alloc(types.ErrorCode);

let device_id = ref.alloc(types.DeviceId);
let commands = ref.alloc(types.CommandQueue);
let context = ref.alloc(types.Context);
let program = ref.alloc(types.Program);
let kernel = ref.alloc(types.Kernel);

let input = ref.alloc(types.Mem);
let output = ref.alloc(types.Mem);

const _data:Array<number> = new Array(count).fill(0);
for(let i = 0; i < count; ++i)
{
    _data[i] = Math.random();
}
let data = new Buffer(count * ref.types.float.size);
for(let i = 0; i < count; ++i)
{
    const offset = i * ref.types.float.size;
    ref.types.float.set(data, offset, _data[i])
}

let platform = CL_Platform.instance();
platform.construct();
let cl = platform.library;

let ids = new (types.DeviceIdArray)(1);
err = cl[Method.clGetDeviceIDs](null, def.cl_device_type.CL_DEVICE_TYPE_GPU, 2, ids, null);

if (err != def.cl_errors.CL_SUCCESS) {
    console.error('Error: Failed to create a device group!');
    process.exit(1);
}

device_id = ids.get(1);
err = ref.alloc(types.ErrorCode);
context = cl[Method.clCreateContext](null, 1, ids, null, null, err);

if (!context)
{
    console.error('Error: Failed to create a compute context!');
    process.exit(1);
}

err = ref.alloc(types.ErrorCode);
commands = cl[Method.clCreateCommandQueue](context, ids.get(0), 0, err);

if (!commands)
{
    console.error('Error: Failed to create a command commands!');
    process.exit(1);
}

let srcCount = new (types.StringArray)(1);
srcCount.set(0, vecAdd);
err = ref.alloc(types.ErrorCode);

program = cl[Method.clCreateProgramWithSource](context, 1, srcCount, null, err);

if (!program || err.deref() !== def.cl_errors.CL_SUCCESS)
{
    console.error('Error: Failed to create compute program!');
    process.exit(1);
}

err = cl[Method.clBuildProgram](program, 0, null, null, null, null);

if (err != def.cl_errors.CL_SUCCESS) {
    let size = ref.alloc(ref.types.size_t, 2048).deref();
    let buffer = new (new fastcall.ArrayType(ref.refType(ref.types.char)))(size);

    cl[Method.clGetProgramBuildInfo](program, ids.get(0), def.cl_program_build_info.CL_PROGRAM_BUILD_LOG, size, buffer.buffer, null);
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(buffer.buffer[i]);
    }
    let d = result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join('').trim();
    console.log('Program build error: ', d);
    process.exit(1);
}

err = ref.alloc(types.ErrorCode);
kernel = cl[Method.clCreateKernel](program, 'square', err);

if (err.deref() != def.cl_errors.CL_SUCCESS) {
    console.log('Error: Failed to create compute kernel!');
}

input = cl[Method.clCreateBuffer](context, def.cl_mem_flags.CL_MEM_READ_ONLY,  ref.types.float.size * count, null, null);
output = cl[Method.clCreateBuffer](context, def.cl_mem_flags.CL_MEM_WRITE_ONLY,  ref.types.float.size * count, null, null);

if (!input || !output)
{
    console.log('Error: Failed to allocate device memory!');
    process.exit(1);
}

err = cl[Method.clEnqueueWriteBuffer](commands, input, def.cl_bool.CL_TRUE, 0, ref.types.float.size * count, data, 0, null, null);

if (err != def.cl_errors.CL_SUCCESS)
{
    console.log(err);
    console.log('Error: Failed to write to source array!');
    process.exit(1);
}

const _count = ref.alloc(ref.types.int16, count);
err = 0;
err = cl[Method.clSetKernelArg](kernel, 0, 8, input.ref());
err |= cl[Method.clSetKernelArg](kernel, 1, 8, output.ref());
err |= cl[Method.clSetKernelArg](kernel, 2, ref.types.uint.size, _count.ref());
if (err != def.cl_errors.CL_SUCCESS)
{
    console.log('Error: Failed to set kernel arguments!', err);
    process.exit(1);
}

err = cl[Method.clGetKernelWorkGroupInfo](kernel, ids.get(0), def.cl_kernel_work_group_info.CL_KERNEL_WORK_GROUP_SIZE, ref.types.size_t.size, local, null);
if (err != def.cl_errors.CL_SUCCESS)
{
    console.log('Error: Failed to retrieve kernel work group info! ', err);
    process.exit(1);
}

let _global = new (types.SizeTArray)(1);
let _local = new (types.SizeTArray)(1);
_global.set(0, count);
_local.set(0, local.deref());

err = cl[Method.clEnqueueNDRangeKernel](commands, kernel, 1, null, _global, _local, 0, null, null);

console.log(err, def.cl_errors[err]);

if (err != def.cl_errors.CL_SUCCESS)
{
    console.log('Error: Failed to execute kernel!');
    process.exit(1);
}

let results = new (new fastcall.ArrayType(ref.refType(ref.types.float)))(count);

cl[Method.clFinish](commands);
    err = cl[Method.clEnqueueReadBuffer](commands, output, def.cl_bool.CL_TRUE, 0, ref.types.float.size * count, results.buffer /* pointer */, 0, null, null);

    console.log('err', err);
    if (err != def.cl_errors.CL_SUCCESS)
    {
        console.log('Error: Failed to read output array! ', err);
        process.exit(1);
    }

        console.log(results.buffer);
        console.log(ref.types.float.get(results.buffer, 0));
        console.log(Math.pow(_data[0], 2));

        cl[Method.clReleaseMemObject](input);
        cl[Method.clReleaseMemObject](output);
        cl[Method.clReleaseProgram](program);
        cl[Method.clReleaseKernel](kernel);
        cl[Method.clReleaseCommandQueue](commands);
        cl[Method.clReleaseContext](context);

    // }, 2000);

console.log('doneeee!1aa');



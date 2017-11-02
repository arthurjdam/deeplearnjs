export default (precision) => `#pragma OPENCL EXTENSION cl_khr_fp64 : enable
    __kernel void mulMat(
        __global ${precision}* A, 
        __global ${precision}* B, 
        __global ${precision}* C, 
        int wA, int wB) {
      
       int tx = get_global_id(0); 
       int ty = get_global_id(1);
     
       float v = 0;
       for (int k = 0; k < wA; ++k)
       {
          float elA = A[ty * wA + k];
          float elB = B[k * wB + tx];
          v += elA * elB;
       }
     
       C[ty * wA + tx] = v;
    }
`;
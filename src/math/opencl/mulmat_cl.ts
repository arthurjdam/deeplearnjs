export default `
    __kernel void matrixMul(
        __global float* C, 
        __global float* A, 
        __global float* B, 
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
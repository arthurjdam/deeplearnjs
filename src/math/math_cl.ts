import {ConvInfo} from './conv_util';
import {MatrixOrientation, NDArrayMath, SumTypes, SumTypesMap} from './math';
import * as ndarray from './ndarray';
import {Array1D, Array2D, Array3D, Array4D, DataTypes, NDArray, Scalar} from './ndarray';

export class NDArrayMathCL extends NDArrayMath {
    constructor(safeMode = false) {
        super(safeMode);
    }

    protected cloneInternal<G extends keyof DataTypes, T extends NDArray<G>>(
        a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected slice1DInternal(input: Array1D, begin: number, size: number):
    Array1D {
        throw new Error('Not yet implemented!');
    }

    protected slice2DInternal(input: Array2D, begin: [number, number], size: [
        number, number
        ]): Array2D {
        throw new Error('Not yet implemented!');
    }

    protected slice3DInternal(
        input: Array3D, begin: [number, number, number],
        size: [number, number, number]): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected slice4DInternal(
        input: Array4D, begin: [number, number, number, number],
        size: [number, number, number, number]): Array4D {
        throw new Error('Not yet implemented!');
    }

    protected copy2DInternal(
        source: Array2D, sourceBeginRowCol: [number, number],
        sourceSizeRowCol: [number, number], dest: Array2D,
        destBeginRowCol: [number, number],
        destSizeRowCol: [number, number]): void {
        throw new Error('Not yet implemented!');
    }

    protected concat1DInternal(a: Array1D, b: Array1D): Array1D {
        throw new Error('Not yet implemented!');
    }

    protected concat2DInternal(a: Array2D, b: Array2D, axis: number): Array2D {
        throw new Error('Not yet implemented!');
    }

    protected concat3DInternal(x1: Array3D, x2: Array3D, axis: number): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected concat4DInternal(x1: Array4D, x2: Array4D, axis: number): Array4D {
        throw new Error('Not yet implemented!');
    }

    protected scaledArrayAddInternal<T extends NDArray>(
        c1: Scalar, a: T, c2: Scalar, b: T): T {
        throw new Error('Not yet implemented!');
    }

    protected negInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected matMulInternal(
        a: Array2D, b: Array2D, aOrientation: MatrixOrientation,
        bOrientation: MatrixOrientation): Array2D {
        throw new Error('Not yet implemented!');
    }

    protected multiplyInternal<T extends NDArray>(a: T, b: T): T {
        throw new Error('Not yet implemented!');
    }

    protected batchNormalization3DInternal(
        x: Array3D, mean: Array3D|Array1D, variance: Array3D|Array1D,
        varianceEpsilon: number|null, scale?: Array3D|Array1D,
        offset?: Array3D|Array1D): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected switchDimInternal<T extends NDArray>(a: T, newDim: number[]): T {
        throw new Error('Not yet implemented!');
    }

    protected sumInternal<T extends keyof DataTypes>(a: NDArray<T>):
    Scalar<SumTypes[T]> {
        throw new Error('Not yet implemented!');
    }

    protected argMinInternal(a: NDArray): Scalar {
        throw new Error('Not yet implemented!');
    }

    protected argMaxInternal(a: NDArray): Scalar {
        throw new Error('Not yet implemented!');
    }

    protected argMaxEqualsInternal(x1: NDArray, x2: NDArray): Scalar {
        throw new Error('Not yet implemented!');
    }

    protected topKInternal(ndarray: NDArray, k: number):
    {values: Array1D, indices: Array1D} {
        throw new Error('topK CL not yet implemented!');
    }

    protected minInternal(a: NDArray): Scalar {
        throw new Error('Not yet implemented!');
    }

    protected maxInternal(a: NDArray): Scalar {
        throw new Error('Not yet implemented!');
    }

    protected divideInternal<T extends NDArray>(a: T, b: T): T {
        throw new Error('Not yet implemented!');
    }

    protected addInternal<T extends NDArray>(a: T, b: T): T {
        throw new Error('Not yet implemented!');
    }

    protected subInternal<T extends NDArray>(a: T, b: T): T {
        throw new Error('Not yet implemented!');
    }

    protected logSumExpInternal(a: NDArray): Scalar {
        throw new Error('Not yet implemented!');
    }

    protected ceilInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected floorInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected expInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected logInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected sqrtInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected reluInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected clipInternal<T extends NDArray>(
        a: T, min: number, max: number): T {
        throw new Error('Not yet implemented!');
    }

    protected absInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected sigmoidInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected sinInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected cosInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected tanInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected asinInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected acosInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected atanInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected sinhInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected coshInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected tanhInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected stepInternal<T extends NDArray>(a: T): T {
        throw new Error('Not yet implemented!');
    }

    protected conv2dInternal(
        x: Array3D, filter: Array4D, bias: Array1D|null,
        convInfo: ConvInfo): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected conv2dDerInputInternal(
        dy: Array3D, filter: Array4D, convInfo: ConvInfo): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected conv2dDerFilterInternal(
        x: Array3D, dY: Array3D, convInfo: ConvInfo): Array4D {
        throw new Error('Not yet implemented!');
    }

    protected conv2dDerBiasInternal(dY: Array3D): Array1D {
        throw new Error('Not yet implemented!');
    }

    protected maxPoolInternal(x: Array3D, convInfo: ConvInfo): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected minPoolInternal(x: Array3D, convInfo: ConvInfo): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected avgPoolInternal(x: Array3D, convInfo: ConvInfo): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected maxPoolBackpropInternal(
        dy: Array3D, x: Array3D, convInfo: ConvInfo): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected resizeBilinear3DInternal(
        x: Array3D, newShape2D: [number, number],
        alignCorners: boolean): Array3D {
        throw new Error('Not yet implemented!');
    }

    protected multinomialInternal(
        probs: Array1D, numSamples: number, seed: number): Array1D {
        throw new Error('Not yet implemented!');
    }

    protected oneHotInternal(
        indices: Array1D, depth: number, onValue: number,
        offValue: number): Array2D {
        throw new Error('Not yet implemented!');
    }
}
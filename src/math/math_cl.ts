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
    }

    protected slice1DInternal(input: Array1D, begin: number, size: number):
    Array1D {
    }

    protected slice2DInternal(input: Array2D, begin: [number, number], size: [
        number, number
        ]): Array2D {
    }

    protected slice3DInternal(
        input: Array3D, begin: [number, number, number],
        size: [number, number, number]): Array3D {
    }

    protected slice4DInternal(
        input: Array4D, begin: [number, number, number, number],
        size: [number, number, number, number]): Array4D {
    }

    protected copy2DInternal(
        source: Array2D, sourceBeginRowCol: [number, number],
        sourceSizeRowCol: [number, number], dest: Array2D,
        destBeginRowCol: [number, number],
        destSizeRowCol: [number, number]): void {
    }

    protected concat1DInternal(a: Array1D, b: Array1D): Array1D {
    }

    protected concat2DInternal(a: Array2D, b: Array2D, axis: number): Array2D {
    }

    protected concat3DInternal(x1: Array3D, x2: Array3D, axis: number): Array3D {
    }

    protected concat4DInternal(x1: Array4D, x2: Array4D, axis: number): Array4D {
    }

    protected scaledArrayAddInternal<T extends NDArray>(
        c1: Scalar, a: T, c2: Scalar, b: T): T {
    }

    protected negInternal<T extends NDArray>(a: T): T {
    }

    protected matMulInternal(
        a: Array2D, b: Array2D, aOrientation: MatrixOrientation,
        bOrientation: MatrixOrientation): Array2D {
    }

    protected multiplyInternal<T extends NDArray>(a: T, b: T): T {
    }

    protected batchNormalization3DInternal(
        x: Array3D, mean: Array3D|Array1D, variance: Array3D|Array1D,
        varianceEpsilon: number|null, scale?: Array3D|Array1D,
        offset?: Array3D|Array1D): Array3D {
    }

    protected switchDimInternal<T extends NDArray>(a: T, newDim: number[]): T {
    }

    protected sumInternal<T extends keyof DataTypes>(a: NDArray<T>):
    Scalar<SumTypes[T]> {
    }

    protected argMinInternal(a: NDArray): Scalar {
    }

    protected argMaxInternal(a: NDArray): Scalar {
    }

    protected argMaxEqualsInternal(x1: NDArray, x2: NDArray): Scalar {
    }

    protected topKInternal(ndarray: NDArray, k: number):
    {values: Array1D, indices: Array1D} {
        throw new Error('topK CL not yet implemented!');
    }

    protected minInternal(a: NDArray): Scalar {
    }

    protected maxInternal(a: NDArray): Scalar {
    }

    protected divideInternal<T extends NDArray>(a: T, b: T): T {
    }

    protected addInternal<T extends NDArray>(a: T, b: T): T {
    }

    protected subInternal<T extends NDArray>(a: T, b: T): T {
    }

    protected logSumExpInternal(a: NDArray): Scalar {
    }

    protected ceilInternal<T extends NDArray>(a: T): T {
    }

    protected floorInternal<T extends NDArray>(a: T): T {
    }

    protected expInternal<T extends NDArray>(a: T): T {
    }

    protected logInternal<T extends NDArray>(a: T): T {
    }

    protected sqrtInternal<T extends NDArray>(a: T): T {
    }

    protected reluInternal<T extends NDArray>(a: T): T {
    }

    protected clipInternal<T extends NDArray>(
        a: T, min: number, max: number): T {
    }

    protected absInternal<T extends NDArray>(a: T): T {
    }

    protected sigmoidInternal<T extends NDArray>(a: T): T {
    }

    protected sinInternal<T extends NDArray>(a: T): T {
    }

    protected cosInternal<T extends NDArray>(a: T): T {
    }

    protected tanInternal<T extends NDArray>(a: T): T {
    }

    protected asinInternal<T extends NDArray>(a: T): T {
    }

    protected acosInternal<T extends NDArray>(a: T): T {
    }

    protected atanInternal<T extends NDArray>(a: T): T {
    }

    protected sinhInternal<T extends NDArray>(a: T): T {
    }

    protected coshInternal<T extends NDArray>(a: T): T {
    }

    protected tanhInternal<T extends NDArray>(a: T): T {
    }

    protected stepInternal<T extends NDArray>(a: T): T {
    }

    protected conv2dInternal(
        x: Array3D, filter: Array4D, bias: Array1D|null,
        convInfo: ConvInfo): Array3D {
    }

    protected conv2dDerInputInternal(
        dy: Array3D, filter: Array4D, convInfo: ConvInfo): Array3D {
    }

    protected conv2dDerFilterInternal(
        x: Array3D, dY: Array3D, convInfo: ConvInfo): Array4D {
    }

    protected conv2dDerBiasInternal(dY: Array3D): Array1D {
    }

    protected maxPoolInternal(x: Array3D, convInfo: ConvInfo): Array3D {
    }

    protected minPoolInternal(x: Array3D, convInfo: ConvInfo): Array3D {
    }

    protected avgPoolInternal(x: Array3D, convInfo: ConvInfo): Array3D {
    }

    protected maxPoolBackpropInternal(
        dy: Array3D, x: Array3D, convInfo: ConvInfo): Array3D {
    }

    protected resizeBilinear3DInternal(
        x: Array3D, newShape2D: [number, number],
        alignCorners: boolean): Array3D {
    }

    protected multinomialInternal(
        probs: Array1D, numSamples: number, seed: number): Array1D {
    }

    protected oneHotInternal(
        indices: ndarray.Array1D, depth: number, onValue: number,
        offValue: number): ndarray.Array2D {
    }
}
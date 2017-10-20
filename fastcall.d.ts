declare module 'fastcall' {
    export module ffi {
        export class Library {
            constructor(path:string, methods:any);
            [index: string]:(a:any, b:any, c:any, d?:any, e?:any) => any;
        }
    }

    export module ref {
        export function alloc(type:string):any;
        export function refType(type:string):string;
        export function coerceType(type:string):string;
        export const types: {
            int:string;
            uint:string;
            size_t:string;
            uint64:string;
        };
        export const sizeof: {
            pointer: number
        };
    }

    export class ArrayType {
        constructor(ref:any);
    }

    export class StructType {
        constructor(ref:any);
    }

    export class UnionType {
        constructor(ref: any);
    }

    export class Disposable {

    }

    export class PlatformIDArray {
        constructor(size:number);
    }
}
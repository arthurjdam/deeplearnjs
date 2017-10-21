declare module 'fastcall' {
    export module ffi {
        export class Library {
            constructor(path:string, methods:any);
            [index: string]:(a:any, b:any, c:any, d?:any, e?:any, f?:any) => any;
        }
        export function Function(type:string, args:Array<any>):string;
    }

    class Type {
        alignment:number;
        name:string;
        size:number;
        deref():number;
    }

    export module ref {
        export function alloc(type:string):Type;
        export function refType(type:string):Type;
        export function coerceType(type:string):Type;
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
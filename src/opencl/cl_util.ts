export default class CL_Util {
    static toHandle(obj:any|Buffer, name?:string) {
        if (obj instanceof Buffer) {
            return obj;
        }
        if (obj && obj.handle instanceof Buffer) {
            return obj.handle;
        }

        throw new TypeError(`Object ${(name || 'obj')} is not an OpenCL object.`);
    }

    static toPtr(ptr:any|Buffer, name:string) {
        if (ptr === null) {
            return null;
        }
        if (ptr instanceof Buffer) {
            return ptr;
        }
        if (ptr && ptr.buffer instanceof Buffer) {
            return ptr.buffer;
        }
        throw new TypeError(`Pointer ${name || 'ptr'} is not a buffer.`);
    }
}
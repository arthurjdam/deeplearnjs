import CL_Platform, {types} from './cl_platform';
import CL_Device from './cl_device';
import { ref } from 'fastcall';
import CL_Util from './cl_util';
import CL_Context from './cl_context';
import * as def from './definitions';
import { Method, types } from './cl_platform';

export default class CL_Command_Queue {
    private _handle;

    constructor(context:CL_Context) {

        let err = ref.alloc(types.ErrorCode);

        this._handle = CL_Platform.instance().library[Method.clCreateCommandQueue](
            CL_Util.toHandle(context.getHandle()),
            CL_Util.toHandle(context.getDevices().get(0)),
            def.cl_command_queue_properties.CL_QUEUE_PROFILING_ENABLE | def.cl_command_queue_properties.CL_QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE,
            err);

        // CL_Platform.instance().library[Method.clReleaseCommandQueue](this._handle);
    }

    enqueueNDRangeKernel() {

    }

    enqueueReadBuffer() {

    }
}
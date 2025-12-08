import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  handleExecutionError,
  throwMissingParameterError,
} from "../../../utils/errorHandling";

export async function deleteAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const resourceid = this.getNodeParameter("resourceid", itemIndex) as string;

    if (!resourceid) {
      throwMissingParameterError(this, "resourceid", itemIndex);
    }

    const parameters: IDataObject = {};

    const responseData = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "delete",
      parameters,
      resourceId: resourceid,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "appointments",
      operation: "delete",
      itemIndex,
    });
  }
}

import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  handleExecutionError,
  throwMissingParameterError,
} from "../../../utils/errorHandling";
import { extractString } from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function deleteAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const resourceid = extractString(this, "resourceid", itemIndex, "");

    if (!resourceid) {
      throwMissingParameterError(this, "resourceid", itemIndex);
    }

    const parameters = {};

    const response = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "delete",
      parameters,
      resourceId: resourceid,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "appointments",
      operation: "delete",
      itemIndex,
    });
  }
}

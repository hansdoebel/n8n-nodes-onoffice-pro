import { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function updateTask(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const taskId = extractNumber(this, "taskId", itemIndex);
    const dataFields = extractObject(this, "data", itemIndex, {});

    const parameters: IDataObject = {
      data: dataFields,
    };

    const response = await apiRequest.call(this, {
      resourceType: "task",
      operation: "modify",
      parameters,
      resourceId: String(taskId),
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "task",
      operation: "update",
      itemIndex,
    });
  }
}

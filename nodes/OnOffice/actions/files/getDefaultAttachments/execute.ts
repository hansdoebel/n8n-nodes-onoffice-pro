import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getDefaultAttachments(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const response = await apiRequest.call(this, {
    resourceType: "defaultAttachments",
    operation: "get",
    parameters: {},
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

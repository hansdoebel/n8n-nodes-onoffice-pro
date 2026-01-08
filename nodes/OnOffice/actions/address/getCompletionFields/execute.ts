import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getAddressCompletionFields(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const response = await apiRequest.call(this, {
    resourceType: "addressCompletionFields",
    operation: "getCompletionFields",
    parameters: {},
    resourceId: "",
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

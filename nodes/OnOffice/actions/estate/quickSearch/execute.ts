import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function quickSearch(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const searchTerm = this.getNodeParameter("searchTerm", index) as string;

  const parameters: IDataObject = { searchTerm };

  const response = await apiRequest.call(this, {
    resourceType: "quickSearch",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

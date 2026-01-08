import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function deleteSearchCriteria(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const searchCriteriaId = this.getNodeParameter("searchCriteriaId", index) as number;

  const response = await apiRequest.call(this, {
    resourceType: "searchcriteria",
    operation: "delete",
    parameters: {},
    resourceId: String(searchCriteriaId),
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

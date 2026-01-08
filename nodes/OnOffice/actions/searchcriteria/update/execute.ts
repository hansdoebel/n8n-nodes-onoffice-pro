import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function updateSearchCriteria(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const searchCriteriaId = this.getNodeParameter("searchCriteriaId", index) as number;
  const data = this.getNodeParameter("data", index, {}) as IDataObject;

  const parameters: IDataObject = { ...data };

  const response = await apiRequest.call(this, {
    resourceType: "searchcriteria",
    operation: "modify",
    parameters,
    resourceId: String(searchCriteriaId),
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

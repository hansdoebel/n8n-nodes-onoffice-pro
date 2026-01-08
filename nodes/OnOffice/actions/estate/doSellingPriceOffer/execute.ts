import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function doSellingPriceOffer(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const estateid = this.getNodeParameter("estateid", index) as number;
  const data = this.getNodeParameter("data", index, {}) as IDataObject;

  const parameters: IDataObject = { estateid, ...data };

  const response = await apiRequest.call(this, {
    resourceType: "sellingPriceOffer",
    operation: "do",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

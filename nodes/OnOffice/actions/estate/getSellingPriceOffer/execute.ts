import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getSellingPriceOffer(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const estateid = this.getNodeParameter("estateid", index) as number;

  const parameters: IDataObject = { estateid };

  const response = await apiRequest.call(this, {
    resourceType: "sellingPriceOffer",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

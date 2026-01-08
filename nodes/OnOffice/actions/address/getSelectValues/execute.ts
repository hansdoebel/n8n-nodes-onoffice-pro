import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getAddressSelectValues(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const fieldname = this.getNodeParameter("fieldname", index) as string;

  const response = await apiRequest.call(this, {
    resourceType: "confignewaddressfields",
    operation: "getSelectValues",
    parameters: {
      fieldname,
    },
    resourceId: "fieldvalues",
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

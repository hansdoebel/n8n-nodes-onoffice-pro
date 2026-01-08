import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function newsletterRegistration(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const addressId = this.getNodeParameter("addressId", index) as number;
  const register = this.getNodeParameter("register", index) as boolean;

  const response = await apiRequest.call(this, {
    resourceType: "registerNewsletter",
    operation: "newsletterRegistration",
    parameters: {
      register,
    },
    resourceId: String(addressId),
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

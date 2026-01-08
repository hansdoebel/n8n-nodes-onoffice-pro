import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function sendAddressCompletion(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const addressId = this.getNodeParameter("addressId", index) as number;
  const mode = this.getNodeParameter("mode", index) as string;
  const emailidentity = this.getNodeParameter(
    "emailidentity",
    index,
    "",
  ) as string;

  const parameters: IDataObject = {
    addressId,
    mode,
  };

  if (emailidentity) {
    parameters.emailidentity = emailidentity;
  }

  const response = await apiRequest.call(this, {
    resourceType: "sendaddresscompletion",
    operation: "sendCompletion",
    parameters,
    resourceId: "",
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function downloadAddressFiles(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const addressid = this.getNodeParameter("addressid", index) as number;
  const language = this.getNodeParameter("language", index, "") as string;

  const parameters: IDataObject = {
    addressid,
  };

  if (language) {
    parameters.language = language;
  }

  const response = await apiRequest.call(this, {
    resourceType: "downloadFiles",
    operation: "downloadFiles",
    parameters,
    resourceId: "address",
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

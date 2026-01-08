import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getTrackingDetails(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const accountname = this.getNodeParameter("accountname", index) as string;
  const password = this.getNodeParameter("password", index) as string;

  const parameters: IDataObject = {
    accountname,
    password,
  };

  const response = await apiRequest.call(this, {
    resourceType: "estatetrackingdetails",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

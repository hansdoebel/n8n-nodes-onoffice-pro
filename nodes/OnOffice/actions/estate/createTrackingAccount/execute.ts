import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createTrackingAccount(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const accountname = this.getNodeParameter("accountname", index) as string;
  const accountpassword = this.getNodeParameter(
    "accountpassword",
    index,
  ) as string;
  const estateid = this.getNodeParameter("estateid", index) as string;
  const additionalFields = this.getNodeParameter(
    "additionalFields",
    index,
    {},
  ) as IDataObject;

  const parameters: IDataObject = {
    accountname,
    accountpassword,
    estateid,
    ...additionalFields,
  };

  const response = await apiRequest.call(this, {
    resourceType: "createestatetrackingaccount",
    operation: "do",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function modifyEstateFiles(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const fileId = this.getNodeParameter("fileId", index) as number;
  const data = this.getNodeParameter("data", index, {}) as IDataObject;

  const parameters: IDataObject = {
    relationtype: "estate",
    fileId,
    ...data,
  };

  const response = await apiRequest.call(this, {
    resourceType: "file",
    operation: "modify",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function deleteEstateFiles(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const fileId = this.getNodeParameter("fileId", index) as number;
  const relationtype = this.getNodeParameter("relationtype", index) as string;

  const parameters: IDataObject = {
    fileId,
    relationtype,
  };

  const response = await apiRequest.call(this, {
    resourceType: "file",
    operation: "delete",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

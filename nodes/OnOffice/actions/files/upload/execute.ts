import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function uploadFile(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const relationtype = this.getNodeParameter("relationtype", index) as string;
  const relatedid = this.getNodeParameter("relatedid", index) as number;
  const filecontent = this.getNodeParameter("filecontent", index) as string;
  const filename = this.getNodeParameter("filename", index) as string;

  const parameters: IDataObject = {
    relationtype,
    relatedid,
    filecontent,
    filename,
  };

  const response = await apiRequest.call(this, {
    resourceType: "fileUpload",
    operation: "do",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

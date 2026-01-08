import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getEstateFiles(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const estateid = this.getNodeParameter("estateid", index) as number;
  const additionalOptions = this.getNodeParameter(
    "additionalOptions",
    index,
    {},
  ) as IDataObject;

  const parameters: IDataObject = { estateid };

  if (additionalOptions.fileid) parameters.fileid = additionalOptions.fileid;
  if (additionalOptions.documentAttribute) {
    parameters.documentAttribute = additionalOptions.documentAttribute;
  }
  if (additionalOptions.showispublishedonhomepage) {
    parameters.showispublishedonhomepage =
      additionalOptions.showispublishedonhomepage;
  }
  if (additionalOptions.showpublicationstatus) {
    parameters.showpublicationstatus = additionalOptions.showpublicationstatus;
  }
  if (additionalOptions.includeImageUrl) {
    parameters.includeImageUrl = additionalOptions.includeImageUrl;
  }
  if (additionalOptions.listlimit) {
    parameters.listlimit = additionalOptions.listlimit;
  }
  if (additionalOptions.listoffset) {
    parameters.listoffset = additionalOptions.listoffset;
  }

  const response = await apiRequest.call(this, {
    resourceType: "file",
    operation: "getFiles",
    parameters,
    resourceId: "estate",
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

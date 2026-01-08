import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getAddressFiles(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const addressid = this.getNodeParameter("addressid", index) as number;
  const additionalOptions = this.getNodeParameter(
    "additionalOptions",
    index,
    {},
  ) as {
    fileid?: number;
    listlimit?: number;
    listoffset?: number;
  };

  const parameters: IDataObject = {
    addressid,
  };

  if (additionalOptions.fileid) {
    parameters.fileid = additionalOptions.fileid;
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
    resourceId: "address",
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

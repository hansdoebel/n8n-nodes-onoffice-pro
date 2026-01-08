import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";

export async function generatePDFExpose(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const estateid = this.getNodeParameter("estateid", index) as number;
  const template = this.getNodeParameter("template", index) as string;
  const additionalOptions = this.getNodeParameter("additionalOptions", index, {}) as IDataObject;

  const parameters: IDataObject = { estateid, template };

  if (additionalOptions.addressids) {
    parameters.addressids = parseCommaSeparatedNumbers(additionalOptions.addressids as string);
  }
  if (additionalOptions.language) parameters.language = additionalOptions.language;
  if (additionalOptions.gzcompress !== undefined) parameters.gzcompress = additionalOptions.gzcompress;
  if (additionalOptions.forceEstateLocation !== undefined) parameters.forceEstateLocation = additionalOptions.forceEstateLocation;

  const response = await apiRequest.call(this, {
    resourceType: "pdf",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

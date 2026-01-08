import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getAppointmentsList(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const additionalOptions = this.getNodeParameter("additionalOptions", index, {}) as IDataObject;

  const parameters: IDataObject = {};

  if (additionalOptions.dateFrom) parameters.dateFrom = additionalOptions.dateFrom;
  if (additionalOptions.dateTo) parameters.dateTo = additionalOptions.dateTo;
  if (additionalOptions.listlimit) parameters.listlimit = additionalOptions.listlimit;
  if (additionalOptions.listoffset) parameters.listoffset = additionalOptions.listoffset;

  const response = await apiRequest.call(this, {
    resourceType: "appointmentsList",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getAppointmentFiles(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const appointmentid = this.getNodeParameter("appointmentid", index) as number;

  const parameters: IDataObject = { appointmentid };

  const response = await apiRequest.call(this, {
    resourceType: "appointmentFiles",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

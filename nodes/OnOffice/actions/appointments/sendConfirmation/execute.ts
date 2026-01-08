import type { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function sendAppointmentConfirmation(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const appointmentId = this.getNodeParameter("appointmentId", index) as number;
  const emailidentity = this.getNodeParameter("emailidentity", index, "") as string;

  const parameters: IDataObject = { appointmentId };

  if (emailidentity) parameters.emailidentity = emailidentity;

  const response = await apiRequest.call(this, {
    resourceType: "sendAppointmentConfirmation",
    operation: "do",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

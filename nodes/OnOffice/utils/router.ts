import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";

import { readAddress } from "../actions/address/read/execute";
import { createAddress } from "../actions/address/create/execute";
import { readAgentslog } from "../actions/agentslog/read/execute";
import { readAppointment } from "../actions/appointments/read/execute";
import { createAppointment } from "../actions/appointments/create/execute";
import { readEstate } from "../actions/estate/read/execute";
import { sendMail } from "../actions/email/do/execute";
import { getRelation } from "../actions/relation/get/execute";

export async function router(
  this: IExecuteFunctions,
): Promise<INodeExecutionData[][]> {
  const items = this.getInputData();
  const operationResult: INodeExecutionData[] = [];

  for (let i = 0; i < items.length; i++) {
    const resource = this.getNodeParameter("resource", i);
    const operation = this.getNodeParameter("operation", i);
    let responseData: IDataObject | IDataObject[] = [];

    switch (resource) {
      case "address":
        switch (operation) {
          case "read":
            responseData = await readAddress.call(this, i);
            break;
          case "create":
            responseData = await createAddress.call(this, i);
            break;
          default:
            break;
        }
        break;
      case "estate":
        switch (operation) {
          case "read":
            responseData = await readEstate.call(this, i);
            break;
          default:
            break;
        }
        break;
      case "agentslog":
        switch (operation) {
          case "read":
            responseData = await readAgentslog.call(this, i);
            break;
          default:
            break;
        }
        break;
      case "appointments":
        switch (operation) {
          case "read":
            responseData = await readAppointment.call(this, i);
            break;
          case "create":
            responseData = await createAppointment.call(this, i);
            break;
          default:
            break;
        }
        break;
      case "email":
        switch (operation) {
          case "sendMail":
            responseData = await sendMail.call(this, i);
            break;
          default:
            break;
        }
        break;
      case "relation":
        switch (operation) {
          case "get":
            responseData = await getRelation.call(this, i);
            break;
          default:
            break;
        }
        break;
    }

    operationResult.push(...this.helpers.returnJsonArray(responseData));
  }

  return [operationResult];
}

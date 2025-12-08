import { registerAction } from "./actionRegistry";

import { readAddress } from "../actions/address/read/execute";
import { createAddress } from "../actions/address/create/execute";

import { readAgentslog } from "../actions/agentslog/read/execute";

import { readAppointment } from "../actions/appointments/read/execute";
import { createAppointment } from "../actions/appointments/create/execute";
import { deleteAppointment } from "../actions/appointments/delete/execute";

import { sendMail } from "../actions/email/do/execute";

import { readEstate } from "../actions/estate/read/execute";

import { getRelation } from "../actions/relation/get/execute";

import { getTemplates } from "../actions/templates/get/execute";

export function registerAllActions(): void {
  registerAction("address", "read", readAddress);
  registerAction("address", "create", createAddress);

  registerAction("agentslog", "read", readAgentslog);

  registerAction("appointments", "read", readAppointment);
  registerAction("appointments", "create", createAppointment);
  registerAction("appointments", "delete", deleteAppointment);

  registerAction("email", "sendMail", sendMail);

  registerAction("estate", "read", readEstate);

  registerAction("relation", "get", getRelation);

  registerAction("templates", "get", getTemplates);
}

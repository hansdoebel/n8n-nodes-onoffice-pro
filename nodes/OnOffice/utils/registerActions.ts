import { registerAction } from "./actionRegistry";

import { readAddress } from "../actions/address/read/execute";
import { createAddress } from "../actions/address/create/execute";
import { updateAddress } from "../actions/address/update/execute";
import { searchAddress } from "../actions/address/search/execute";
import { getAddressFiles } from "../actions/address/getFiles/execute";
import { downloadAddressFiles } from "../actions/address/downloadFiles/execute";
import { getAddressCompletionFields } from "../actions/address/getCompletionFields/execute";
import { sendAddressCompletion } from "../actions/address/sendCompletion/execute";
import { getAddressSelectValues } from "../actions/address/getSelectValues/execute";
import { newsletterRegistration } from "../actions/address/newsletterRegistration/execute";

import { readAgentslog } from "../actions/agentslog/read/execute";
import { createAgentslog } from "../actions/agentslog/create/execute";
import { updateAgentslog } from "../actions/agentslog/update/execute";

import { readAppointment } from "../actions/appointments/read/execute";
import { createAppointment } from "../actions/appointments/create/execute";
import { updateAppointment } from "../actions/appointments/update/execute";
import { deleteAppointment } from "../actions/appointments/delete/execute";
import { getAppointmentsList } from "../actions/appointments/getList/execute";
import { getAppointmentFiles } from "../actions/appointments/getFiles/execute";
import { sendAppointmentConfirmation } from "../actions/appointments/sendConfirmation/execute";

import { sendMail } from "../actions/email/do/execute";

import { readEstate } from "../actions/estate/read/execute";
import { createEstate } from "../actions/estate/create/execute";
import { updateEstate } from "../actions/estate/update/execute";
import { getEstateFiles } from "../actions/estate/getFiles/execute";
import { modifyEstateFiles } from "../actions/estate/modifyFiles/execute";
import { deleteEstateFiles } from "../actions/estate/deleteFiles/execute";
import { getEstateCategories } from "../actions/estate/getCategories/execute";
import { quickSearch } from "../actions/estate/quickSearch/execute";
import { generatePDFExpose } from "../actions/estate/generatePDFExpose/execute";
import { getSellingPriceOffer } from "../actions/estate/getSellingPriceOffer/execute";
import { doSellingPriceOffer } from "../actions/estate/doSellingPriceOffer/execute";

import { getRelation } from "../actions/relation/get/execute";
import { createRelation } from "../actions/relation/create/execute";
import { updateRelation } from "../actions/relation/update/execute";
import { deleteRelation } from "../actions/relation/del/execute";

import { getTemplates } from "../actions/templates/get/execute";

import { readTask } from "../actions/task/read/execute";
import { createTask } from "../actions/task/create/execute";
import { updateTask } from "../actions/task/update/execute";

import { readSearchCriteria } from "../actions/searchcriteria/read/execute";
import { createSearchCriteria } from "../actions/searchcriteria/create/execute";
import { updateSearchCriteria } from "../actions/searchcriteria/update/execute";
import { deleteSearchCriteria } from "../actions/searchcriteria/delete/execute";

import { uploadFile } from "../actions/files/upload/execute";
import { getDefaultAttachments } from "../actions/files/getDefaultAttachments/execute";

export function registerAllActions(): void {
  registerAction("address", "read", readAddress);
  registerAction("address", "create", createAddress);
  registerAction("address", "update", updateAddress);
  registerAction("address", "search", searchAddress);
  registerAction("address", "getFiles", getAddressFiles);
  registerAction("address", "downloadFiles", downloadAddressFiles);
  registerAction("address", "getCompletionFields", getAddressCompletionFields);
  registerAction("address", "sendCompletion", sendAddressCompletion);
  registerAction("address", "getSelectValues", getAddressSelectValues);
  registerAction("address", "newsletterRegistration", newsletterRegistration);

  registerAction("agentslog", "read", readAgentslog);
  registerAction("agentslog", "create", createAgentslog);
  registerAction("agentslog", "update", updateAgentslog);

  registerAction("appointments", "read", readAppointment);
  registerAction("appointments", "create", createAppointment);
  registerAction("appointments", "update", updateAppointment);
  registerAction("appointments", "delete", deleteAppointment);
  registerAction("appointments", "getList", getAppointmentsList);
  registerAction("appointments", "getFiles", getAppointmentFiles);
  registerAction(
    "appointments",
    "sendConfirmation",
    sendAppointmentConfirmation,
  );

  registerAction("email", "sendMail", sendMail);

  registerAction("estate", "read", readEstate);
  registerAction("estate", "create", createEstate);
  registerAction("estate", "update", updateEstate);
  registerAction("estate", "getFiles", getEstateFiles);
  registerAction("estate", "modifyFiles", modifyEstateFiles);
  registerAction("estate", "deleteFiles", deleteEstateFiles);
  registerAction("estate", "getCategories", getEstateCategories);
  registerAction("estate", "quickSearch", quickSearch);
  registerAction("estate", "generatePDFExpose", generatePDFExpose);
  registerAction("estate", "getSellingPriceOffer", getSellingPriceOffer);
  registerAction("estate", "doSellingPriceOffer", doSellingPriceOffer);

  registerAction("relation", "get", getRelation);
  registerAction("relation", "create", createRelation);
  registerAction("relation", "update", updateRelation);
  registerAction("relation", "delete", deleteRelation);

  registerAction("templates", "get", getTemplates);

  registerAction("task", "read", readTask);
  registerAction("task", "create", createTask);
  registerAction("task", "update", updateTask);

  registerAction("searchcriteria", "read", readSearchCriteria);
  registerAction("searchcriteria", "create", createSearchCriteria);
  registerAction("searchcriteria", "update", updateSearchCriteria);
  registerAction("searchcriteria", "delete", deleteSearchCriteria);

  registerAction("files", "upload", uploadFile);
  registerAction("files", "getDefaultAttachments", getDefaultAttachments);
}

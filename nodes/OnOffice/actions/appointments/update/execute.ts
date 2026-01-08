import { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  parseCommaSeparatedNumbers,
  parseCommaSeparatedStrings,
} from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractBoolean,
  extractNumber,
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function updateAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const appointmentId = extractNumber(this, "appointmentId", itemIndex);

    const dataFields = extractObject(this, "data", itemIndex, {});

    let data: IDataObject = {};

    if (dataFields.description) {
      data.description = dataFields.description;
    }

    if (dataFields.start_dt) {
      data.start_dt = dataFields.start_dt;
    }

    if (dataFields.end_dt) {
      data.end_dt = dataFields.end_dt;
    }

    if (dataFields.art) {
      data.art = dataFields.art;
    }

    if (dataFields.ganztags !== undefined) {
      data.ganztags = dataFields.ganztags;
    }

    if (dataFields.note) {
      data.note = dataFields.note;
    }

    if (dataFields.private !== undefined) {
      data.private = dataFields.private;
    }

    if (dataFields.status) {
      data.status = dataFields.status;
    }

    if (dataFields.ressources) {
      data.ressources = parseCommaSeparatedStrings(
        dataFields.ressources as string,
      );
    }

    if (dataFields.erinnerung) {
      data.erinnerung = dataFields.erinnerung;
    }

    let parameters: IDataObject = { data };

    const relatedAddressIds = extractString(
      this,
      "relatedAddressIds",
      itemIndex,
      "",
    );
    if (relatedAddressIds) {
      parameters.relatedAddressIds = parseCommaSeparatedNumbers(
        relatedAddressIds,
      );
    }

    const replaceAddressIds = extractBoolean(
      this,
      "replaceAddressIds",
      itemIndex,
      false,
    );
    if (replaceAddressIds) {
      parameters.replaceAddressIds = replaceAddressIds;
    }

    const relatedEstateId = extractNumber(
      this,
      "relatedEstateId",
      itemIndex,
      0,
    );
    if (relatedEstateId) {
      parameters.relatedEstateId = relatedEstateId;
    }

    const response = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "modify",
      parameters,
      resourceId: String(appointmentId),
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "appointments",
      operation: "update",
      itemIndex,
    });
  }
}

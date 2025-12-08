import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { AppointmentCreateParameters } from "../../../utils/types";
import {
  extractBoolean,
  extractNumber,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const useJsonParameters = extractBoolean(
      this,
      "jsonParameters",
      itemIndex,
      false,
    );
    let parameters: AppointmentCreateParameters = {};

    if (useJsonParameters) {
      const jsonParameters = extractString(
        this,
        "parameters",
        itemIndex,
        "",
      );
      parameters = JSON.parse(jsonParameters);
    } else {
      const startDate = extractString(
        this,
        "data.datestart",
        itemIndex,
        "",
      );
      const endDate = extractString(
        this,
        "data.dateend",
        itemIndex,
        "",
      );

      const dataParameters: IDataObject = {
        start_dt: startDate,
        end_dt: endDate,
      };

      const description = extractString(
        this,
        "data.description",
        itemIndex,
        "",
      );
      if (description) {
        dataParameters.description = description;
      }

      const art = extractString(this, "data.art", itemIndex, "");
      if (art) {
        dataParameters.art = art;
      }

      const ganztags = extractBoolean(
        this,
        "data.ganztags",
        itemIndex,
        false,
      );
      if (ganztags !== false) {
        dataParameters.ganztags = ganztags;
      }

      const note = extractString(this, "data.note", itemIndex, "");
      if (note) {
        dataParameters.note = note;
      }

      const privateAppointment = extractBoolean(
        this,
        "data.private",
        itemIndex,
        false,
      );
      if (privateAppointment !== false) {
        dataParameters.private = privateAppointment;
      }

      const relatedAddressIdsParam = extractString(
        this,
        "additionalFields.relatedAddressIds",
        itemIndex,
        "",
      );
      const relatedAddressIds = parseCommaSeparatedNumbers(
        relatedAddressIdsParam,
      );

      const relatedEstateId = extractNumber(
        this,
        "additionalFields.relatedEstateId",
        itemIndex,
        0,
      );

      parameters = {
        data: dataParameters,
        relatedAddressIds,
        relatedEstateId: relatedEstateId || undefined,
      };
    }

    const response = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "create",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "appointments",
      operation: "create",
      itemIndex,
    });
  }
}

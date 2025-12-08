import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import { AppointmentReadParameters } from "../../../utils/types";
import {
  extractBoolean,
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function readAppointment(
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
    let parameters: AppointmentReadParameters = {};

    if (useJsonParameters) {
      const jsonParameters = extractString(
        this,
        "parameters",
        itemIndex,
        "",
      );
      parameters = JSON.parse(jsonParameters);
    } else {
      const fieldSelections = this.getNodeParameter(
        "parameters",
        itemIndex,
        [],
      );
      if (
        Array.isArray(fieldSelections) &&
        fieldSelections.length > 0 &&
        fieldSelections.every((item) => typeof item === "string")
      ) {
        parameters.data = fieldSelections as string[];
      }
    }

    const resourceid = extractString(this, "resourceid", itemIndex, "");

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    const finalParameters: AppointmentReadParameters = {
      ...parameters,
      ...additionalFields,
    };

    const response = await apiRequest.call(this, {
      resourceType: "appointments",
      operation: "read",
      parameters: finalParameters,
      resourceId: resourceid,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "appointments",
      operation: "read",
      itemIndex,
    });
  }
}

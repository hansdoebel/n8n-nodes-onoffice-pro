import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  parseCommaSeparated,
} from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { AddressParameters } from "../../../utils/types";
import {
  extractObject,
  extractString,
  extractStringArray,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function readAddress(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: AddressParameters = {
      recordids: [],
      data: [],
    };

    const recordIdInput = extractString(
      this,
      "recordids",
      itemIndex,
      "",
    );
    if (recordIdInput) {
      parameters.recordids = parseCommaSeparated(recordIdInput);
    }

    const fieldSelections = extractStringArray(
      this,
      "parameters",
      itemIndex,
      [],
    );
    if (fieldSelections.length > 0) {
      parameters.data = fieldSelections;
    }

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    parameters = buildParameters(parameters, additionalFields);

    const response = await apiRequest.call(this, {
      resourceType: "address",
      operation: "read",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "address",
      operation: "read",
      itemIndex,
    });
  }
}

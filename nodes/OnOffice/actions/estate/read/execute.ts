import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  COMMON_FIELDS,
} from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { EstateParameters } from "../../../utils/types";
import { extractResponseData } from "../../../utils/responseHandler";
import {
  extractObject,
  extractStringArray,
} from "../../../utils/parameterExtraction";

export async function readEstate(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: EstateParameters = {
      data: [],
    };

    const resourceId = extractStringArray(
      this,
      "resourceid",
      itemIndex,
      [],
    )[0];

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

    const estateFields = [...COMMON_FIELDS, "addMobileUrl"];
    parameters = buildParameters(parameters, additionalFields, estateFields);

    const response = await apiRequest.call(this, {
      resourceType: "estate",
      operation: "read",
      parameters,
      resourceId,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "estate",
      operation: "read",
      itemIndex,
    });
  }
}

import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { TemplateParameters } from "../../../utils/types";
import {
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getTemplates(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const type = extractString(this, "type", itemIndex, "");
    const parameters: TemplateParameters = {
      type,
    };

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    for (const [key, value] of Object.entries(additionalFields)) {
      if (key === "mailtemplateids" && typeof value === "string") {
        parameters.mailtemplateids = parseCommaSeparatedNumbers(value);
      } else if (key !== "type") {
        (parameters as Record<string, unknown>)[key] = value;
      }
    }

    const response = await apiRequest.call(this, {
      resourceType: "templates",
      operation: "get",
      parameters: parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "templates",
      operation: "get",
      itemIndex,
    });
  }
}

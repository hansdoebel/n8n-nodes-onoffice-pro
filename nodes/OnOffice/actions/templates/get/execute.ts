import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { TemplateParameters } from "../../../utils/types";

export async function getTemplates(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const parameters: TemplateParameters = {
      type: this.getNodeParameter("type", itemIndex, "") as string,
    };

    const additionalFields = this.getNodeParameter(
      "additionalFields",
      itemIndex,
      {},
    ) as IDataObject;

    for (const [key, value] of Object.entries(additionalFields)) {
      if (key === "mailtemplateids" && typeof value === "string") {
        parameters.mailtemplateids = parseCommaSeparatedNumbers(value);
      } else {
        (parameters as any)[key] = value;
      }
    }

    const responseData = await apiRequest.call(this, {
      resourceType: "templates",
      operation: "get",
      parameters: parameters as IDataObject,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "templates",
      operation: "get",
      itemIndex,
    });
  }
}

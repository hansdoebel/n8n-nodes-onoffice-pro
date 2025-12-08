import {
  GenericValue,
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";

interface TemplateParams {
  category?: string;
  mailtemplateids?: number[];
  list?: boolean | GenericValue;
  type: string | GenericValue;
}

function convertToIDataObject(params: TemplateParams): IDataObject {
  return { ...params };
}

export async function getTemplates(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const parameters: TemplateParams = {
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
        parameters[key as keyof TemplateParams] = value as never;
      }
    }

    const responseData = await apiRequest.call(this, {
      resourceType: "templates",
      operation: "get",
      parameters: convertToIDataObject(parameters),
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

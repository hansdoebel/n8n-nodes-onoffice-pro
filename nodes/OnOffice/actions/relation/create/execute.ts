import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createRelation(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const parentIds = extractString(this, "parentIds", itemIndex);
    const childIds = extractString(this, "childIds", itemIndex);
    const relationtype = extractString(this, "relationtype", itemIndex);

    const relationinfo = extractObject(this, "relationinfo", itemIndex, {});

    let parameters: any = {
      parentid: parseCommaSeparatedNumbers(parentIds),
      childid: parseCommaSeparatedNumbers(childIds),
      relationtype,
    };

    if (Object.keys(relationinfo).length > 0) {
      parameters.relationinfo = relationinfo;
    }

    const response = await apiRequest.call(this, {
      resourceType: "relation",
      operation: "create",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "relation",
      operation: "create",
      itemIndex,
    });
  }
}

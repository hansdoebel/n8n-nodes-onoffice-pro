import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function deleteRelation(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const parentId = extractNumber(this, "parentId", itemIndex);
    const childId = extractNumber(this, "childId", itemIndex);
    const relationtype = extractString(this, "relationtype", itemIndex);

    const parameters: any = {
      parentid: parentId,
      childid: childId,
      relationtype,
    };

    const response = await apiRequest.call(this, {
      resourceType: "relation",
      operation: "delete",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "relation",
      operation: "delete",
      itemIndex,
    });
  }
}

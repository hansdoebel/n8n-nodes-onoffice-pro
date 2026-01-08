import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createSearchCriteria(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const addressid = extractNumber(this, "addressid", itemIndex);
    const dataFields = extractObject(this, "data", itemIndex, {});

    const parameters: any = {
      addressid,
      data: dataFields,
    };

    const response = await apiRequest.call(this, {
      resourceType: "searchcriteria",
      operation: "create",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "searchcriteria",
      operation: "create",
      itemIndex,
    });
  }
}

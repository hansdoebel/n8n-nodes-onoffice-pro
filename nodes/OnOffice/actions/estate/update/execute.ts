import { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function updateEstate(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const estateId = extractNumber(this, "estateId", itemIndex);

    const dataFields = extractObject(this, "data", itemIndex, {});

    let data: IDataObject = {};

    Object.keys(dataFields).forEach((key) => {
      if (
        dataFields[key] !== undefined && dataFields[key] !== null &&
        dataFields[key] !== ""
      ) {
        data[key] = dataFields[key];
      }
    });

    const parameters = { data };

    const response = await apiRequest.call(this, {
      resourceType: "estate",
      operation: "modify",
      parameters,
      resourceId: String(estateId),
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "estate",
      operation: "update",
      itemIndex,
    });
  }
}

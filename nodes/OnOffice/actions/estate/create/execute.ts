import { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import { extractObject } from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createEstate(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
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
      operation: "create",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "estate",
      operation: "create",
      itemIndex,
    });
  }
}

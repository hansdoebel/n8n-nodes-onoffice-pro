import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createTask(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const dataFields = extractObject(this, "data", itemIndex, {});
    const relatedAddressId = extractNumber(
      this,
      "relatedAddressId",
      itemIndex,
      0,
    );
    const relatedEstateId = extractNumber(
      this,
      "relatedEstateId",
      itemIndex,
      0,
    );

    let parameters: any = {
      data: dataFields,
    };

    if (relatedAddressId) {
      parameters.relatedAddressId = relatedAddressId;
    }

    if (relatedEstateId) {
      parameters.relatedEstateId = relatedEstateId;
    }

    const response = await apiRequest.call(this, {
      resourceType: "task",
      operation: "create",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "task",
      operation: "create",
      itemIndex,
    });
  }
}

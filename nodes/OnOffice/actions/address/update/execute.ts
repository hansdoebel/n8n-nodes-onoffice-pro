import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { buildParameters } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";
import { validatePositiveInteger } from "../../../utils/validation";

export async function updateAddress(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const addressId = extractNumber(this, "addressId", itemIndex);
    validatePositiveInteger(this, addressId, "addressId");

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    let parameters: IDataObject = {};
    parameters = buildParameters(parameters, additionalFields);

    const response = await apiRequest.call(this, {
      resourceType: "address",
      operation: "modify",
      parameters,
      resourceId: String(addressId),
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "address",
      operation: "update",
      itemIndex,
    });
  }
}

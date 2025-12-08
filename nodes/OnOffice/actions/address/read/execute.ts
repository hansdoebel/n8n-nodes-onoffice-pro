import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  parseCommaSeparated,
} from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";

export async function readAddress(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: IDataObject = {
      recordids: [],
      data: [],
    };

    const recordIdInput = this.getNodeParameter(
      "recordids",
      itemIndex,
      "",
    ) as string;
    if (recordIdInput) {
      parameters.recordids = parseCommaSeparated(recordIdInput);
    }

    const fieldSelections = this.getNodeParameter(
      "parameters",
      itemIndex,
      [],
    ) as string[];
    if (fieldSelections.length > 0) {
      parameters.data = fieldSelections;
    }

    const additionalFields = this.getNodeParameter(
      "additionalFields",
      itemIndex,
      {},
    ) as IDataObject;

    parameters = buildParameters(parameters, additionalFields);

    const responseData = await apiRequest.call(this, {
      resourceType: "address",
      operation: "read",
      parameters,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "address",
      operation: "read",
      itemIndex,
    });
  }
}

import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  COMMON_FIELDS,
} from "../../../utils/parameterBuilder";

export async function readEstate(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: IDataObject = {
      data: [],
    };

    const resourceId = this.getNodeParameter(
      "resourceid",
      itemIndex,
      "",
    ) as string;

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

    // Build parameters with common fields plus estate-specific field
    const estateFields = [...COMMON_FIELDS, "addMobileUrl"];
    parameters = buildParameters(parameters, additionalFields, estateFields);

    const responseData = await apiRequest.call(this, {
      resourceType: "estate",
      operation: "read",
      parameters,
      resourceId,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling onOffice API: ${error.message}`,
    );
  }
}

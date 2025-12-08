import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  COMMON_FIELDS,
} from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { EstateParameters } from "../../../utils/types";

export async function readEstate(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: EstateParameters = {
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
    handleExecutionError(this, error, {
      resource: "estate",
      operation: "read",
      itemIndex,
    });
  }
}

import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";

export async function readAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const useJsonParameters = this.getNodeParameter(
      "jsonParameters",
      itemIndex,
      false,
    ) as boolean;
    let parameters: IDataObject = {};

    if (useJsonParameters) {
      const jsonParameters = this.getNodeParameter(
        "parameters",
        itemIndex,
        "",
      ) as string;
      parameters = JSON.parse(jsonParameters);
    } else {
      const fieldSelections = this.getNodeParameter(
        "parameters",
        itemIndex,
        [],
      ) as string[];
      if (fieldSelections.length > 0) {
        parameters.data = fieldSelections;
      }
    }

    const resourceid = this.getNodeParameter(
      "resourceid",
      itemIndex,
      "",
    ) as string;

    const additionalFields = this.getNodeParameter(
      "additionalFields",
      itemIndex,
      {},
    ) as IDataObject;

    const finalParameters: IDataObject = {
      ...parameters,
      ...additionalFields,
    };

    const responseData = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "read",
      parameters: finalParameters,
      resourceId: resourceid,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling onOffice API: ${error.message}`,
    );
  }
}

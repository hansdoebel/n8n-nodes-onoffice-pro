import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";

import { apiRequest } from "../transport";

export async function readAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  const useJsonParameters = this.getNodeParameter(
    "jsonParameters",
    itemIndex,
    false,
  ) as boolean;
  let parameters: IDataObject = {};

  try {
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
        parameters["data"] = fieldSelections;
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

    const requestBody: IDataObject = {
      resourceid: resourceid,
      parameters: {
        ...parameters,
        ...additionalFields,
      },
    };

    const responseData = await apiRequest.call(
      this,
      "calendar",
      "read",
      requestBody,
    );
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    console.error(error);
    throw new NodeOperationError(
      this.getNode(),
      `Error calling onOffice API: ${error.message}`,
    );
  }
}

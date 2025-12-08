import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";

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
      parameters.recordids = recordIdInput.split(",").map((id) => id.trim());
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

    parameters = {
      ...parameters,
      ...(additionalFields.formatoutput !== undefined &&
        { formatoutput: additionalFields.formatoutput }),
      ...(additionalFields.listlimit !== undefined &&
        { listlimit: additionalFields.listlimit }),
      ...(additionalFields.listoffset !== undefined &&
        { listoffset: additionalFields.listoffset }),
      ...(additionalFields.sortby !== undefined &&
        { sortby: additionalFields.sortby }),
      ...(additionalFields.sortorder !== undefined &&
        { sortorder: additionalFields.sortorder }),
    };

    const responseData = await apiRequest.call(this, {
      resourceType: "address",
      operation: "read",
      parameters,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling onOffice API: ${error.message}`,
    );
  }
}

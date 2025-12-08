import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";

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
      ...(additionalFields.addMobileUrl !== undefined &&
        { addMobileUrl: additionalFields.addMobileUrl }),
    };

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

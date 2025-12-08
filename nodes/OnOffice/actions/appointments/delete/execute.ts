import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";

export async function deleteAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const resourceid = this.getNodeParameter("resourceid", itemIndex) as string;

    if (!resourceid) {
      throw new NodeOperationError(
        this.getNode(),
        "Resource ID is required to delete the appointment",
      );
    }

    const parameters: IDataObject = {};

    const responseData = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "delete",
      parameters,
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

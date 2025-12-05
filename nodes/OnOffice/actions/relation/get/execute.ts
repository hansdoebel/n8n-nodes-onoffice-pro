import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "../../../transport";

export async function getRelation(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  const additionalFields = this.getNodeParameter(
    "additionalFields",
    itemIndex,
    {},
  ) as IDataObject;

  const parentidsString = additionalFields.parentids as string;
  const childidsString = additionalFields.childids as string;

  const parentids: number[] = parentidsString
    ? parentidsString.split(",").map(Number)
    : [];
  const childids: number[] = childidsString
    ? childidsString.split(",").map(Number)
    : [];

  const parameters: IDataObject = {
    relationtype: additionalFields.relationtype as string,
    parentids: parentids,
    childids: childids,
  };

  const resourceType = "idsfromrelation";

  try {
    const responseData = await apiRequest.call(
      this,
      resourceType,
      "get",
      parameters,
    );
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling relation API: ${error.message}`,
    );
  }
}

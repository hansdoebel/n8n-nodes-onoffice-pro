import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";

import { apiRequest } from "../transport";

export async function getRelation(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  const relationtype = this.getNodeParameter(
    "relationtype",
    itemIndex,
  ) as string;

  const additionalFields = this.getNodeParameter(
    "additionalFields",
    itemIndex,
    {},
  ) as IDataObject;

  const parentidsString = (additionalFields.parentids as string) || "";
  const childidsString = (additionalFields.childids as string) || "";

  const parentids: number[] = parentidsString
    ? parentidsString
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
      .map((id) => Number(id))
    : [];

  const childids: number[] = childidsString
    ? childidsString
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
      .map((id) => Number(id))
    : [];

  const parameters: IDataObject = {
    relationtype,
  };

  if (parentids.length > 0) {
    parameters.parentids = parentids;
  }

  if (childids.length > 0) {
    parameters.childids = childids;
  }

  if (parentids.length === 0 && childids.length === 0) {
    throw new NodeOperationError(
      this.getNode(),
      "Please provide either Parent IDs or Child IDs.",
      { itemIndex },
    );
  }

  if (parentids.length > 0 && childids.length > 0) {
    throw new NodeOperationError(
      this.getNode(),
      "Please provide either Parent IDs OR Child IDs, not both.",
      { itemIndex },
    );
  }

  const resourceType = "idsfromrelation";

  try {
    const responseData = await apiRequest.call(
      this,
      resourceType,
      "get",
      parameters,
    );

    return this.helpers.returnJsonArray(responseData as IDataObject[]);
  } catch (error: any) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling relation API: ${error.message ?? error}`,
      { itemIndex },
    );
  }
}

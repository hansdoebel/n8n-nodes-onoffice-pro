import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createWorkingList(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const listName = this.getNodeParameter("listName", index) as string;
  const type = this.getNodeParameter("type", index) as string;
  const visibility = this.getNodeParameter("visibility", index) as number;
  const idsInput = this.getNodeParameter("ids", index) as string;
  const additionalFields = this.getNodeParameter(
    "additionalFields",
    index,
    {},
  ) as IDataObject;

  const ids = idsInput.split(",").map((id) => parseInt(id.trim(), 10));

  const parameters: IDataObject = {
    listName,
    type,
    visibility,
    ids,
    ...additionalFields,
  };

  const response = await apiRequest.call(this, {
    resourceType: "workinglist",
    operation: "create",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

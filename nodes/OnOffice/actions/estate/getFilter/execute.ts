import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getFilter(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const module = this.getNodeParameter("module", index) as string;

  const parameters: IDataObject = {
    module,
  };

  const response = await apiRequest.call(this, {
    resourceType: "filters",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getTenantBuyerSeeker(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const estatedataInput = this.getNodeParameter("estatedata", index) as string;

  let estatedata: IDataObject;
  try {
    estatedata = JSON.parse(estatedataInput);
  } catch (error) {
    throw new Error("Estate data must be valid JSON");
  }

  const parameters: IDataObject = {
    estatedata,
  };

  const response = await apiRequest.call(this, {
    resourceType: "qualifiedsuitors",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

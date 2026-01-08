import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getImagesOnHomepage(
  this: IExecuteFunctions,
  index: number,
): Promise<INodeExecutionData[]> {
  const estateidsInput = this.getNodeParameter("estateids", index) as string;
  const categories = this.getNodeParameter("categories", index) as string[];
  const additionalOptions = this.getNodeParameter(
    "additionalOptions",
    index,
    {},
  ) as IDataObject;

  const estateids = estateidsInput.split(",").map((id) =>
    parseInt(id.trim(), 10)
  );

  const parameters: IDataObject = {
    estateids,
    categories,
    ...additionalOptions,
  };

  const response = await apiRequest.call(this, {
    resourceType: "estatepictures",
    operation: "get",
    parameters,
  });

  const responseData = extractResponseData(response);
  return this.helpers.returnJsonArray(responseData);
}

import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedStrings } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function searchAddress(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const searchInput = extractString(this, "searchInput", itemIndex);

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    let parameters: any = {
      input: searchInput,
    };

    if (additionalFields.includecontactdata !== undefined) {
      parameters.includecontactdata = additionalFields.includecontactdata;
    }

    if (additionalFields.casesensitive !== undefined) {
      parameters.casesensitive = additionalFields.casesensitive;
    }

    if (additionalFields.searchparameter) {
      parameters.searchparameter = parseCommaSeparatedStrings(
        additionalFields.searchparameter as string,
      );
    }

    if (additionalFields.listlimit !== undefined) {
      parameters.listlimit = additionalFields.listlimit;
    }

    if (additionalFields.sortby) {
      parameters.sortby = additionalFields.sortby;
    }

    if (additionalFields.sortorder) {
      parameters.sortorder = additionalFields.sortorder;
    }

    const response = await apiRequest.call(this, {
      resourceType: "search",
      operation: "get",
      parameters,
      resourceId: "address",
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "address",
      operation: "search",
      itemIndex,
    });
  }
}

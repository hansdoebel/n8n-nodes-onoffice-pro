import { IExecuteFunctions, INodeExecutionData, IDataObject } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function readSearchCriteria(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const mode = extractString(this, "mode", itemIndex);
    const idsString = extractString(this, "ids", itemIndex, "");
    const additionalOptions = extractObject(
      this,
      "additionalOptions",
      itemIndex,
      {},
    );

    let parameters: IDataObject = {
      mode,
    };

    if (idsString && mode !== "filter") {
      parameters.ids = parseCommaSeparatedNumbers(idsString);
    }

    if (additionalOptions.listlimit) {
      parameters.listlimit = additionalOptions.listlimit;
    }

    if (additionalOptions.listoffset) {
      parameters.listoffset = additionalOptions.listoffset;
    }

    if (additionalOptions.sortby) {
      parameters.sortby = additionalOptions.sortby;
    }

    if (additionalOptions.sortorder) {
      parameters.sortorder = additionalOptions.sortorder;
    }

    const response = await apiRequest.call(this, {
      resourceType: "searchcriterias",
      operation: "get",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "searchcriteria",
      operation: "read",
      itemIndex,
    });
  }
}

import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedStrings } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
  extractString,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function readTask(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const taskId = extractNumber(this, "taskId", itemIndex, 0);
    const dataFields = extractString(
      this,
      "data",
      itemIndex,
      "Betreff,Aufgabe",
    );
    const additionalOptions = extractObject(
      this,
      "additionalOptions",
      itemIndex,
      {},
    );

    let parameters: any = {
      data: parseCommaSeparatedStrings(dataFields),
    };

    if (additionalOptions.listlimit) {
      parameters.listlimit = additionalOptions.listlimit;
    }

    if (additionalOptions.relatedAddressId) {
      parameters.relatedAddressId = additionalOptions.relatedAddressId;
    }

    if (additionalOptions.relatedEstateId) {
      parameters.relatedEstateId = additionalOptions.relatedEstateId;
    }

    if (additionalOptions.relatedProjectIds) {
      parameters.relatedProjectIds = additionalOptions.relatedProjectIds;
    }

    if (additionalOptions.showEfforts) {
      parameters.showEfforts = additionalOptions.showEfforts;
    }

    if (additionalOptions.addMobileUrl) {
      parameters.addMobileUrl = additionalOptions.addMobileUrl;
    }

    const response = await apiRequest.call(this, {
      resourceType: "task",
      operation: "read",
      parameters,
      resourceId: taskId ? String(taskId) : undefined,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "task",
      operation: "read",
      itemIndex,
    });
  }
}

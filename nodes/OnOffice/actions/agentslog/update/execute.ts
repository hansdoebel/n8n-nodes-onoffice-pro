import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedStrings } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import {
  extractNumber,
  extractObject,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function updateAgentslog(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const agentslogId = extractNumber(this, "agentslogId", itemIndex);

    const dataFields = extractObject(
      this,
      "data",
      itemIndex,
      {},
    );

    let data: any = {};

    if (dataFields.actionkind) {
      data.actionkind = dataFields.actionkind;
    }

    if (dataFields.actiontype) {
      data.actiontype = dataFields.actiontype;
    }

    if (dataFields.origincontact) {
      data.origincontact = dataFields.origincontact;
    }

    if (dataFields.cost !== undefined) {
      data.cost = dataFields.cost;
    }

    if (dataFields.note) {
      data.note = dataFields.note;
    }

    if (dataFields.duration !== undefined) {
      data.duration = dataFields.duration;
    }

    if (dataFields.features) {
      data.features = parseCommaSeparatedStrings(dataFields.features as string);
    }

    if (dataFields.datetime) {
      data.datetime = dataFields.datetime;
    }

    const parameters = { data };

    const response = await apiRequest.call(this, {
      resourceType: "agentslog",
      operation: "modify",
      parameters,
      resourceId: String(agentslogId),
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "agentslog",
      operation: "update",
      itemIndex,
    });
  }
}

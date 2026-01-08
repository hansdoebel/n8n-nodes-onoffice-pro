import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  parseCommaSeparatedNumbers,
  parseCommaSeparatedStrings,
} from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { extractObject } from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function createAgentslog(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    let parameters: any = {};

    if (additionalFields.datetime) {
      parameters.datetime = additionalFields.datetime;
    }

    if (additionalFields.actionkind) {
      parameters.actionkind = additionalFields.actionkind;
    }

    if (additionalFields.actiontype) {
      parameters.actiontype = additionalFields.actiontype;
    }

    if (additionalFields.origincontact) {
      parameters.origincontact = additionalFields.origincontact;
    }

    if (additionalFields.features) {
      parameters.features = parseCommaSeparatedStrings(
        additionalFields.features as string,
      );
    }

    if (additionalFields.cost !== undefined) {
      parameters.cost = additionalFields.cost;
    }

    if (additionalFields.duration !== undefined) {
      parameters.duration = additionalFields.duration;
    }

    if (additionalFields.advisorylevel) {
      parameters.advisorylevel = additionalFields.advisorylevel;
    }

    if (additionalFields.reasoncancellation) {
      parameters.reasoncancellation = additionalFields.reasoncancellation;
    }

    if (additionalFields.note) {
      parameters.note = additionalFields.note;
    }

    if (additionalFields.addressids) {
      parameters.addressids = parseCommaSeparatedNumbers(
        additionalFields.addressids as string,
      );
    }

    if (additionalFields.estateid) {
      parameters.estateid = additionalFields.estateid;
    }

    if (additionalFields.projectid) {
      parameters.projectid = additionalFields.projectid;
    }

    if (additionalFields.taskid) {
      parameters.taskid = additionalFields.taskid;
    }

    if (additionalFields.appointmentid) {
      parameters.appointmentid = additionalFields.appointmentid;
    }

    if (additionalFields.fileids) {
      parameters.fileids = parseCommaSeparatedNumbers(
        additionalFields.fileids as string,
      );
    }

    if (additionalFields.userid) {
      parameters.userid = additionalFields.userid;
    }

    const response = await apiRequest.call(this, {
      resourceType: "agentslog",
      operation: "create",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "agentslog",
      operation: "create",
      itemIndex,
    });
  }
}

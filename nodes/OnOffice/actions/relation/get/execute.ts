import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import {
  handleExecutionError,
  throwValidationError,
} from "../../../utils/errorHandling";
import { RelationParameters } from "../../../utils/types";
import { extractString } from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function getRelation(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const relationtype = extractString(this, "relationtype", itemIndex, "");

    const parentidsString = extractString(
      this,
      "additionalFields.parentids",
      itemIndex,
      "",
    );
    const childidsString = extractString(
      this,
      "additionalFields.childids",
      itemIndex,
      "",
    );

    const parentids: number[] = parseCommaSeparatedNumbers(parentidsString);
    const childids: number[] = parseCommaSeparatedNumbers(childidsString);

    const parameters: RelationParameters = {
      relationtype,
    };

    if (parentids.length > 0) {
      parameters.parentids = parentids;
    }

    if (childids.length > 0) {
      parameters.childids = childids;
    }

    if (parentids.length === 0 && childids.length === 0) {
      throwValidationError(
        this,
        "Please provide either Parent IDs or Child IDs",
        itemIndex,
      );
    }

    if (parentids.length > 0 && childids.length > 0) {
      throwValidationError(
        this,
        "Please provide either Parent IDs OR Child IDs, not both",
        itemIndex,
      );
    }

    const response = await apiRequest.call(this, {
      resourceType: "idsfromrelation",
      operation: "get",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error: any) {
    handleExecutionError(this, error, {
      resource: "relation",
      operation: "get",
      itemIndex,
    });
  }
}

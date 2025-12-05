import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { apiRequest } from "./transport";

export async function createAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  const useJsonParameters = this.getNodeParameter(
    "jsonParameters",
    itemIndex,
    false,
  ) as boolean;
  let parameters: IDataObject = {};

  if (useJsonParameters) {
    const jsonParameters = this.getNodeParameter(
      "parameters",
      itemIndex,
      "",
    ) as string;
    parameters = JSON.parse(jsonParameters);
  } else {
    const dataParameters: IDataObject = {
      start_dt: this.getNodeParameter("data.datestart", itemIndex) as string, // MANDATORY
      end_dt: this.getNodeParameter("data.dateend", itemIndex) as string, // MANDATORY
    };

    const description = this.getNodeParameter(
      "data.description",
      itemIndex,
    ) as string;
    if (description) {
      dataParameters.description = description;
    }

    const art = this.getNodeParameter("data.art", itemIndex) as string;
    if (art) {
      dataParameters.art = art;
    }

    const ganztags = this.getNodeParameter(
      "data.ganztags",
      itemIndex,
      false,
    ) as boolean;
    if (ganztags !== undefined) {
      dataParameters.ganztags = ganztags;
    }

    const note = this.getNodeParameter("data.note", itemIndex) as string;
    if (note) {
      dataParameters.note = note;
    }

    const privateAppointment = this.getNodeParameter(
      "data.private",
      itemIndex,
      false,
    ) as boolean;
    if (privateAppointment !== undefined) {
      dataParameters.private = privateAppointment;
    }

    const relatedAddressIdsParam = this.getNodeParameter(
      "additionalFields.relatedAddressIds",
      itemIndex,
      "",
    ) as string;
    const relatedAddressIds = relatedAddressIdsParam
      ? relatedAddressIdsParam
        .split(",")
        .map(Number)
        .filter((id) => !isNaN(id))
      : [];

    const relatedEstateId = this.getNodeParameter(
      "additionalFields.relatedEstateId",
      itemIndex,
    ) as number;

    parameters = {
      parameters: {
        data: dataParameters,
        relatedAddressIds,
        relatedEstateId,
      },
    };
  }

  console.log("API Request parameters:", parameters);

  try {
    const responseData = await apiRequest.call(
      this,
      "calendar",
      "create",
      parameters,
    );
    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `Error calling API: ${error.message}`,
    );
  }
}

import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import { parseCommaSeparatedNumbers } from "../../../utils/parameterBuilder";
import { handleExecutionError } from "../../../utils/errorHandling";
import { AppointmentCreateParameters } from "../../../utils/types";

export async function createAppointment(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const useJsonParameters = this.getNodeParameter(
      "jsonParameters",
      itemIndex,
      false,
    ) as boolean;
    let parameters: AppointmentCreateParameters = {};

    if (useJsonParameters) {
      const jsonParameters = this.getNodeParameter(
        "parameters",
        itemIndex,
        "",
      ) as string;
      parameters = JSON.parse(jsonParameters);
    } else {
      const dataParameters: IDataObject = {
        start_dt: this.getNodeParameter("data.datestart", itemIndex) as string,
        end_dt: this.getNodeParameter("data.dateend", itemIndex) as string,
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
      const relatedAddressIds = parseCommaSeparatedNumbers(
        relatedAddressIdsParam,
      );

      const relatedEstateId = this.getNodeParameter(
        "additionalFields.relatedEstateId",
        itemIndex,
      ) as number;

      parameters = {
        data: dataParameters,
        relatedAddressIds,
        relatedEstateId,
      };
    }

    const responseData = await apiRequest.call(this, {
      resourceType: "calendar",
      operation: "create",
      parameters,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error) {
    handleExecutionError(this, error, {
      resource: "appointments",
      operation: "create",
      itemIndex,
    });
  }
}

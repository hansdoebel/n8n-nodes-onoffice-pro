import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  parseCommaSeparated,
} from "../../../utils/parameterBuilder";
import {
  handleExecutionError,
  throwValidationError,
} from "../../../utils/errorHandling";

export async function readAgentslog(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: IDataObject = {
      data: [],
    };

    // Selected fields (Parameters)
    const fieldSelections = this.getNodeParameter(
      "parameters",
      itemIndex,
      [],
    ) as string[];
    if (fieldSelections.length > 0) {
      parameters.data = fieldSelections;
    }

    // Additional Fields collection
    const additionalFields = this.getNodeParameter(
      "additionalFields",
      itemIndex,
      {},
    ) as IDataObject;

    // Address ID (comma-separated string → array)
    const addressIdInput = (additionalFields.addressid ?? "") as string;
    if (addressIdInput) {
      parameters.addressid = parseCommaSeparated(addressIdInput);
    }

    // Estate ID (comma-separated string → array)
    const estateIdInput = (additionalFields.estateid ?? "") as string;
    if (estateIdInput) {
      parameters.estateid = parseCommaSeparated(estateIdInput);
    }

    // Project ID
    if (additionalFields.projectid !== undefined) {
      parameters.projectid = additionalFields.projectid as number;
    }

    // Build filter object from Filter Rules and/or raw JSON Filter
    let computedFilter: IDataObject | undefined;

    // 1) Filter Rules (fixedCollection)
    const filterRules = (additionalFields.filterRules ?? {}) as IDataObject;

    if (filterRules && filterRules.rule) {
      const rulesArray = Array.isArray(filterRules.rule)
        ? (filterRules.rule as IDataObject[])
        : [filterRules.rule as IDataObject];

      for (const rule of rulesArray) {
        const field = rule.field as string;
        const operator = rule.operator as string;
        const value = (rule.value as string) ?? "";

        if (!field || !operator || value === "") continue;

        if (!computedFilter) {
          computedFilter = {};
        }
        if (!computedFilter[field]) {
          (computedFilter as any)[field] = [];
        }

        let val: any = value;

        // For IN/BETWEEN we allow comma-separated values
        if (operator === "IN" || operator === "BETWEEN") {
          val = value
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean);
        }

        (computedFilter[field] as any[]).push({
          op: operator,
          val,
        });
      }
    }

    // 2) Raw JSON Filter (fallback / advanced)
    if (!computedFilter && additionalFields.filter) {
      if (
        typeof additionalFields.filter === "string" &&
        additionalFields.filter !== ""
      ) {
        try {
          computedFilter = JSON.parse(
            additionalFields.filter as string,
          ) as IDataObject;
        } catch (error: any) {
          throwValidationError(
            this,
            "Filter must be valid JSON",
            itemIndex,
          );
        }
      } else if (typeof additionalFields.filter === "object") {
        computedFilter = additionalFields.filter as IDataObject;
      }
    }

    if (computedFilter) {
      parameters.filter = computedFilter;
    }

    // Add common pagination/sorting fields and agentslog-specific flags
    const agentslogFields = [
      "listlimit",
      "listoffset",
      "sortby",
      "sortorder",
      "fullmail",
      "tracking",
    ];
    const commonFields = buildParameters({}, additionalFields, agentslogFields);
    parameters = { ...parameters, ...commonFields };

    const responseData = await apiRequest.call(this, {
      resourceType: "agentslog",
      operation: "read",
      parameters,
    });

    return this.helpers.returnJsonArray(responseData);
  } catch (error: any) {
    handleExecutionError(this, error, {
      resource: "agentslog",
      operation: "read",
      itemIndex,
    });
  }
}

import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest } from "../../../utils/apiRequest";
import {
  buildParameters,
  parseCommaSeparatedNumbers,
} from "../../../utils/parameterBuilder";
import {
  handleExecutionError,
  throwValidationError,
} from "../../../utils/errorHandling";
import { AgentslogParameters } from "../../../utils/types";
import {
  ensureObject,
  extractObject,
  extractStringArray,
} from "../../../utils/parameterExtraction";
import { extractResponseData } from "../../../utils/responseHandler";

export async function readAgentslog(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    let parameters: AgentslogParameters = {
      data: [],
    };

    const fieldSelections = extractStringArray(
      this,
      "parameters",
      itemIndex,
      [],
    );
    if (fieldSelections.length > 0) {
      parameters.data = fieldSelections;
    }

    const additionalFields = extractObject(
      this,
      "additionalFields",
      itemIndex,
      {},
    );

    const addressIdInput = ensureObject(additionalFields).addressid ?? "";
    if (typeof addressIdInput === "string" && addressIdInput) {
      parameters.addressid = parseCommaSeparatedNumbers(addressIdInput);
    }

    const estateIdInput = ensureObject(additionalFields).estateid ?? "";
    if (typeof estateIdInput === "string" && estateIdInput) {
      parameters.estateid = parseCommaSeparatedNumbers(estateIdInput);
    }

    const projectIdValue = ensureObject(additionalFields).projectid;
    if (projectIdValue !== undefined && projectIdValue !== null) {
      const projectId = Number(projectIdValue);
      if (!isNaN(projectId)) {
        parameters.projectid = projectId;
      }
    }

    let computedFilter = undefined;

    const filterRules = ensureObject(additionalFields).filterRules ?? {};

    if (
      filterRules && typeof filterRules === "object" && "rule" in filterRules
    ) {
      const ruleValue = (filterRules as Record<string, unknown>).rule;
      const rulesArray = Array.isArray(ruleValue)
        ? (ruleValue as Array<
          { field?: string; operator?: string; value?: string }
        >)
        : [
          ruleValue as {
            field?: string;
            operator?: string;
            value?: string;
          },
        ];

      for (const rule of rulesArray) {
        const field = typeof rule.field === "string" ? rule.field : undefined;
        const operator = typeof rule.operator === "string"
          ? rule.operator
          : undefined;
        const value = typeof rule.value === "string" ? rule.value : "";

        if (!field || !operator || value === "") continue;

        if (!computedFilter) {
          computedFilter = {};
        }
        if (!computedFilter[field]) {
          (computedFilter as any)[field] = [];
        }

        let val: string | string[] = value;

        if (operator === "IN" || operator === "BETWEEN") {
          val = value
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean);
        }

        if (!Array.isArray(computedFilter[field])) {
          (computedFilter as any)[field] = [];
        }
        const fieldArray = (computedFilter as any)[field] as Array<{
          op: string;
          val: unknown;
        }>;
        fieldArray.push({
          op: operator,
          val,
        });
      }
    }

    if (!computedFilter) {
      const filterValue = ensureObject(additionalFields).filter;
      if (filterValue) {
        if (typeof filterValue === "string" && filterValue !== "") {
          try {
            computedFilter = JSON.parse(filterValue);
          } catch {
            throwValidationError(
              this,
              "Filter must be valid JSON",
              itemIndex,
            );
          }
        } else if (typeof filterValue === "object") {
          computedFilter = filterValue;
        }
      }
    }

    if (computedFilter) {
      parameters.filter = computedFilter;
    }

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

    const response = await apiRequest.call(this, {
      resourceType: "agentslog",
      operation: "read",
      parameters,
    });

    const responseData = extractResponseData(response);
    return this.helpers.returnJsonArray(responseData);
  } catch (error: any) {
    handleExecutionError(this, error, {
      resource: "agentslog",
      operation: "read",
      itemIndex,
    });
  }
}

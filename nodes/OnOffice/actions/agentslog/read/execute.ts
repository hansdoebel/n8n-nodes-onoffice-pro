import {
  IDataObject,
  IExecuteFunctions,
  IHttpRequestOptions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";
import { getActionId } from "../../../utils/actionIds";
import { generateHmac } from "../../../utils/hmac";
import { API_URL } from "../../../utils/constants";

interface RequestBody {
  actionid: string;
  resourcetype: string;
  identifier: string;
  timestamp: number;
  hmac: string;
  hmac_version: number;
  resourceid: string;
  parameters: IDataObject;
}

interface Parameters {
  data?: string[];
  estateid?: string[];
  addressid?: string[];
  projectid?: number;
  filter?: IDataObject;
  listlimit?: number;
  listoffset?: number;
  sortby?: string;
  sortorder?: string;
  fullmail?: boolean;
  tracking?: boolean;
}

function handleError(this: IExecuteFunctions, error: Error, context: string) {
  console.error(`${context}:`, error);
  throw new NodeOperationError(this.getNode(), `${context} - ${error.message}`);
}

async function apiRequest(
  this: IExecuteFunctions,
  resourceType: string,
  operation: string,
  body: Parameters,
): Promise<any> {
  const credentials = await this.getCredentials("onOfficeApi");
  if (!credentials) {
    throw new NodeOperationError(
      this.getNode(),
      "No credentials were returned!",
    );
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const actionId = getActionId(operation);
  if (!actionId) {
    throw new NodeOperationError(
      this.getNode(),
      `Invalid operation: ${operation}`,
    );
  }

  const hmacSignature = generateHmac(
    credentials.secret as string,
    timestamp,
    credentials.token as string,
    resourceType,
    actionId,
  );

  const requestBody: RequestBody = {
    actionid: actionId,
    resourcetype: resourceType,
    identifier: "",
    timestamp,
    hmac: hmacSignature,
    hmac_version: 2,
    resourceid: "",
    parameters: body as IDataObject,
  };

  const request: IHttpRequestOptions = {
    method: "POST",
    url: API_URL,
    body: {
      token: credentials.token,
      request: { actions: [requestBody] },
    },
    json: true,
  };

  try {
    return await this.helpers.httpRequest(request);
  } catch (error: any) {
    handleError.call(this, error, "OnOffice API request error");
  }
}

export async function readAgentslog(
  this: IExecuteFunctions,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  try {
    const parameters: IDataObject = {
      resourceid: "",
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
      parameters.addressid = addressIdInput
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);
    }

    // Estate ID (comma-separated string → array)
    const estateIdInput = (additionalFields.estateid ?? "") as string;
    if (estateIdInput) {
      parameters.estateid = estateIdInput
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);
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
          throw new NodeOperationError(
            this.getNode(),
            "Filter must be valid JSON",
            { itemIndex },
          );
        }
      } else if (typeof additionalFields.filter === "object") {
        computedFilter = additionalFields.filter as IDataObject;
      }
    }

    if (computedFilter) {
      parameters.filter = computedFilter;
    }

    // Pagination / sorting / flags
    if (additionalFields.listlimit !== undefined) {
      parameters.listlimit = additionalFields.listlimit as number;
    }
    if (additionalFields.listoffset !== undefined) {
      parameters.listoffset = additionalFields.listoffset as number;
    }
    if (additionalFields.sortby !== undefined) {
      parameters.sortby = additionalFields.sortby as string;
    }
    if (additionalFields.sortorder !== undefined) {
      parameters.sortorder = additionalFields.sortorder as string;
    }
    if (additionalFields.fullmail !== undefined) {
      parameters.fullmail = additionalFields.fullmail as boolean;
    }
    if (additionalFields.tracking !== undefined) {
      parameters.tracking = additionalFields.tracking as boolean;
    }

    const responseData = await apiRequest.call(
      this,
      "agentslog",
      "read",
      parameters as Parameters,
    );

    return this.helpers.returnJsonArray(responseData);
  } catch (error: any) {
    console.error("Error occurred:", error);
    throw new NodeOperationError(
      this.getNode(),
      `Error calling onOffice API: ${error.message}`,
    );
  }
}

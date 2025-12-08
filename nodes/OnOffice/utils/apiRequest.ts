import {
  IDataObject,
  IExecuteFunctions,
  IHttpRequestOptions,
  NodeOperationError,
} from "n8n-workflow";
import { getActionId } from "./actionIds";
import { generateHmac } from "./hmac";
import { API_URL } from "./constants";

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

interface ApiRequestOptions {
  resourceType: string;
  operation: string;
  parameters: IDataObject;
  resourceId?: string;
}

export async function apiRequest(
  this: IExecuteFunctions,
  options: ApiRequestOptions,
): Promise<any> {
  const { resourceType, operation, parameters, resourceId = "" } = options;

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
    resourceid: resourceId,
    parameters,
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
    return await this.helpers.request(request);
  } catch (error) {
    throw new NodeOperationError(
      this.getNode(),
      `OnOffice API request error: ${error.message}`,
    );
  }
}

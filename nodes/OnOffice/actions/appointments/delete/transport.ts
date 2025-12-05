import {
  IDataObject,
  IExecuteFunctions,
  IHttpRequestOptions,
  NodeOperationError,
} from "n8n-workflow";

import { generateHmac } from "../../../utils/hmac";
import { getActionId } from "../../../utils/actionIds";
import { API_URL } from "../../../utils/constants";

export async function apiRequest(
  this: IExecuteFunctions,
  resourceType: string,
  operation: string,
  body: IDataObject,
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

  const actionBody: IDataObject = {
    actionid: actionId,
    resourcetype: resourceType,
    identifier: "",
    timestamp: timestamp,
    hmac: hmacSignature,
    hmac_version: 2,
    resourceid: body.resourceid || "",
    parameters: body.parameters || {},
  };

  const request: IHttpRequestOptions = {
    method: "POST",
    url: API_URL,
    body: {
      token: credentials.token,
      request: { actions: [actionBody] },
    },
    json: true,
  };

  console.log("API Request Details:", JSON.stringify(request, null, 2));

  try {
    return await this.helpers.request(request);
  } catch (error) {
    console.error("API Request Error:", error);
    throw new NodeOperationError(
      this.getNode(),
      `OnOffice API request error: ${error.message}`,
    );
  }
}

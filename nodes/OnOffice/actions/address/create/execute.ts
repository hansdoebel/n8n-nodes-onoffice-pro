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

async function apiRequest(
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
		resourceid: "",
		parameters: body,
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

export async function createAddress(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	let parameters: IDataObject = {
		recordids: [],
		data: [],
	};

	try {
		const recordIdInput = this.getNodeParameter(
			"recordids",
			itemIndex,
			"",
		) as string;
		if (recordIdInput) {
			parameters.recordids = recordIdInput.split(",").map((id) => id.trim());
		}

		const fieldSelections = this.getNodeParameter(
			"parameters",
			itemIndex,
			[],
		) as string[];
		if (fieldSelections.length > 0) {
			parameters.data = fieldSelections;
		}

		const additionalFields = this.getNodeParameter(
			"additionalFields",
			itemIndex,
			{},
		) as IDataObject;

		parameters = {
			...parameters,
			...(additionalFields.formatoutput !== undefined &&
				{ formatoutput: additionalFields.formatoutput }),
			...(additionalFields.listlimit !== undefined &&
				{ listlimit: additionalFields.listlimit }),
			...(additionalFields.listoffset !== undefined &&
				{ listoffset: additionalFields.listoffset }),
			...(additionalFields.sortby !== undefined &&
				{ sortby: additionalFields.sortby }),
			...(additionalFields.sortorder !== undefined &&
				{ sortorder: additionalFields.sortorder }),
		};

		const responseData = await apiRequest.call(
			this,
			"address",
			"create",
			parameters,
		);

		return this.helpers.returnJsonArray(responseData);
	} catch (error) {
		console.error("Error occurred:", error);
		throw new NodeOperationError(
			this.getNode(),
			`Error calling onOffice API: ${error.message}`,
		);
	}
}

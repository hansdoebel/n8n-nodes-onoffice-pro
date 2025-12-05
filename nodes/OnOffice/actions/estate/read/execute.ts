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
	resourceid?: string;
	parameters: IDataObject;
}

interface Parameters {
	data?: string[];
	formatoutput?: boolean;
	addMobileUrl?: boolean;
	listlimit?: number;
	listoffset?: number;
	sortby?: string;
	sortorder?: string;
}

function handleError(this: IExecuteFunctions, error: Error, context: string) {
	console.error(`${context}:`, error);
	throw new NodeOperationError(this.getNode(), `${context} - ${error.message}`);
}

async function apiRequest(
	this: IExecuteFunctions,
	resourceType: string,
	operation: string,
	resourceId: string,
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
		resourceid: resourceId || "",
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
		return await this.helpers.request(request);
	} catch (error) {
		handleError.call(this, error, "OnOffice API request error");
	}
}

export async function readEstate(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	let parameters: IDataObject = {
		resourceid: "",
		data: [],
	};

	try {
		const resourceId = this.getNodeParameter(
			"resourceid",
			itemIndex,
			"",
		) as string;

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
			...(additionalFields.addMobileUrl !== undefined &&
				{ addMobileUrl: additionalFields.addMobileUrl }),
		};

		const responseData = await apiRequest.call(
			this,
			"estate",
			"read",
			resourceId,
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

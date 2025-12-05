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
	parameters: Parameters; // Changed from IDataObject to Parameters
}

interface Parameters {
	emailidentity: string;
	templateid?: number;
	estateids?: string[];
	receiver: string[];
	pdfexposeidentifiers?: string[];
	useHtml?: boolean;
	attachLinkedMailToHtmlMessage?: boolean;
	forwarded?: boolean;
	replied?: boolean;
	mergeexposeintopdfletter?: boolean;
	displayName?: string;
	bcc?: string[];
	cc?: string[];
	subject?: string;
	onlineattachmentids?: string[];
	replyto?: string;
	body?: string;
	documentattributes?: string[];
	pdfformids?: string[];
	pdfletterids?: string[];
	messageid?: string;
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
			request: { actions: [requestBody] },
		},
		json: true,
	};

	console.log("API Request Details:", JSON.stringify(request, null, 2));
	try {
		return await this.helpers.request(request);
	} catch (error) {
		handleError.call(this, error, "OnOffice API request error");
	}
}

export async function sendMail(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	try {
		console.log("sendMail started for itemIndex:", itemIndex);
		let parameters: Parameters = {
			emailidentity: "",
			receiver: [],
		};

		const emailIdentity = this.getNodeParameter(
			"emailidentity",
			itemIndex,
			"",
		) as string;
		const receiverInput = this.getNodeParameter(
			"receiver",
			itemIndex,
			"",
		) as string;
		const receiver = receiverInput.split(",").map((email) => email.trim())
			.filter(Boolean);

		if (receiver.length === 0) {
			throw new NodeOperationError(
				this.getNode(),
				"At least one valid receiver is required.",
			);
		}

		parameters.emailidentity = emailIdentity;
		parameters.receiver = receiver;

		const additionalFields = this.getNodeParameter(
			"additionalFields",
			itemIndex,
			{},
		) as IDataObject;
		console.log("Additional Fields Received:", additionalFields);

		if (additionalFields) {
			if (additionalFields.estateids) {
				parameters.estateids = (additionalFields.estateids as string)
					.split(",")
					.map((id) => id.trim());
			}
			if (additionalFields.templateid) {
				parameters.templateid = parseInt(
					additionalFields.templateid as string,
					10,
				);
				if (isNaN(parameters.templateid)) {
					throw new NodeOperationError(
						this.getNode(),
						"Template ID must be a valid integer.",
					);
				}
			}
			if (additionalFields.pdfexposeidentifiers) {
				parameters.pdfexposeidentifiers =
					(additionalFields.pdfexposeidentifiers as string)
						.split(",")
						.map((id) => id.trim());
			}
			if (additionalFields.onlineattachmentids) {
				parameters.onlineattachmentids =
					(additionalFields.onlineattachmentids as string)
						.split(",")
						.map((id) => id.trim());
			}
			if (additionalFields.documentattributes) {
				parameters.documentattributes =
					(additionalFields.documentattributes as string)
						.split(",")
						.map((id) => id.trim());
			}
			if (additionalFields.pdfformids) {
				parameters.pdfformids = (additionalFields.pdfformids as string)
					.split(",")
					.map((id) => id.trim());
			}
			if (additionalFields.pdfletterids) {
				parameters.pdfletterids = (additionalFields.pdfletterids as string)
					.split(",")
					.map((id) => id.trim());
			}

			if (
				additionalFields.subject && typeof additionalFields.subject === "string"
			) {
				parameters.subject = additionalFields.subject.trim();
			}
			if (additionalFields.body && typeof additionalFields.body === "string") {
				parameters.body = additionalFields.body.trim();
			}
			if (
				additionalFields.messageid &&
				typeof additionalFields.messageid === "string"
			) {
				parameters.messageid = additionalFields.messageid.trim();
			}
			if (
				additionalFields.displayName &&
				typeof additionalFields.displayName === "string"
			) {
				parameters.displayName = additionalFields.displayName.trim();
			}
			if (additionalFields.bcc && Array.isArray(additionalFields.bcc)) {
				parameters.bcc = additionalFields.bcc.map((bccEmail) =>
					bccEmail.trim()
				);
			}
			if (additionalFields.cc && Array.isArray(additionalFields.cc)) {
				parameters.cc = additionalFields.cc.map((ccEmail) => ccEmail.trim());
			}
			if (additionalFields.useHtml !== undefined) {
				parameters.useHtml = Boolean(additionalFields.useHtml);
			}
			if (additionalFields.attachLinkedMailToHtmlMessage !== undefined) {
				parameters.attachLinkedMailToHtmlMessage = Boolean(
					additionalFields.attachLinkedMailToHtmlMessage,
				);
			}
			if (additionalFields.forwarded !== undefined) {
				parameters.forwarded = Boolean(additionalFields.forwarded);
			}
			if (additionalFields.replied !== undefined) {
				parameters.replied = Boolean(additionalFields.replied);
			}
			if (additionalFields.mergeexposeintopdfletter !== undefined) {
				parameters.mergeexposeintopdfletter = Boolean(
					additionalFields.mergeexposeintopdfletter,
				);
			}
		}

		console.log(
			"Final parameters to send:",
			JSON.stringify(parameters, null, 2),
		);

		const responseData = await apiRequest.call(
			this,
			"sendmail",
			"do",
			parameters,
		);
		return this.helpers.returnJsonArray(responseData);
	} catch (error) {
		console.error("Error occurred:", error);
		throw new NodeOperationError(
			this.getNode(),
			`Error calling OnOffice API: ${error.message}`,
		);
	}
}

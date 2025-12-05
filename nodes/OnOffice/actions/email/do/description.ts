import type { INodeProperties } from "n8n-workflow";

export const sendMailDescription: INodeProperties[] = [
	{
		displayName: "Email ID",
		name: "emailidentity",
		type: "string",
		default: "",
		description:
			"MANDATORY: Identity under whose name the emails should be sent",
		displayOptions: {
			show: {
				resource: ["email"],
				operation: ["sendMail"],
			},
		},
	},
	{
		displayName: "Receiver",
		name: "receiver",
		type: "string",
		default: "",
		description: "MANDATORY: Receiver of the email",
		displayOptions: {
			show: {
				resource: ["email"],
				operation: ["sendMail"],
			},
		},
	},
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {},
		displayOptions: {
			show: {
				resource: ["email"],
				operation: ["sendMail"],
			},
		},
		options: [
			{
				displayName: "Attach Linked Mail to HTML Message",
				name: "attachLinkedMailToHtmlMessage",
				description: "Whether to attach linked Mail to HTML Message",
				type: "boolean",
				default: true,
			},
			{
				displayName: "BCC",
				name: "bcc",
				type: "string",
				default: "",
				description:
					"Blind copy receiver of the email. Both valid email addresses and database IDs of enterprise addresses can be transferred here.",
			},
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
				description: "Email content. Ignored if templateid has a valid value.",
			},
			{
				displayName: "CC",
				name: "cc",
				type: "string",
				default: "",
				description:
					"Copy receiver of the email. Both valid email addresses and database IDs of enterprise addresses can be applied here.",
			},
			{
				displayName: "Display Name",
				name: "displayName",
				type: "string",
				default: "",
				description: 'The display name is an addition to a sender mail address that is displayed to the recipient instead of the raw address',
			},
			{
				displayName: "Document Attributes",
				name: "documentattributes",
				type: "string",
				default: "",
				description: "Field names of the document attributes",
			},
			{
				displayName: "Estate IDs",
				name: "estateids",
				type: "string",
				default: "",
				description: "Database IDs of estates in enterprise",
			},
			{
				displayName: "Forwarded",
				name: "forwarded",
				description:
					"Whether the email with the specified message ID is to be forwarded",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Merge Expose Into Pdfletter",
				name: "mergeexposeintopdfletter",
				description:
					"Whether Exposé and PDF letter attachments are merged into one document and sent as one attachment file",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Message ID",
				name: "messageid",
				type: "string",
				default: "",
				description:
					"Message ID of an existing email. Used with forwarded or replied to forward/reply to this email.",
			},
			{
				displayName: "Online Attachment IDs",
				name: "onlineattachmentids",
				type: "string",
				default: "",
				description: "The IDs of the estate files from the files tab",
			},
			{
				displayName: "PDF Exposé ID",
				name: "pdfexposeidentifiers",
				type: "string",
				default: "",
				description: "Identifiers for PDF exposés",
			},
			{
				displayName: "PDF Form IDs",
				name: "pdfformids",
				type: "string",
				default: "",
				description: "IDs of the PDF forms sent as attachments",
			},
			{
				displayName: "PDF Letter IDs",
				name: "pdfletterids",
				type: "string",
				default: "",
				description: "IDs of the PDF letters sent as attachments",
			},
			{
				displayName: "Replied",
				name: "replied",
				description:
					"Whether the email with the specified message ID is to be replied to",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Reply To",
				name: "replyto",
				type: "string",
				default: "",
				description: "Email address for email reply",
			},
			{
				displayName: "Subject",
				name: "subject",
				type: "string",
				default: "",
				description: "Email subject",
			},
			{
				displayName: "Template ID",
				name: "templateid",
				type: "string",
				default: "",
				description: "ID of an email template stored in enterprise",
			},
			{
				displayName: "Use HTML",
				name: "useHtml",
				description: "Whether to send email as HTML",
				type: "boolean",
				default: true,
			},
		],
	},
];

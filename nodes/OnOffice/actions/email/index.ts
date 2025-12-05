import type { INodeProperties } from "n8n-workflow";

import * as sendMail from "./do";

export { sendMail };

export const descriptions: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["email"],
			},
		},
		options: [
			{
				name: "Do Send E-Mail",
				value: "sendMail",
				action: "Do send mail",
			},
			{
				name: "Get E-Mail Links",
				value: "getMailLinks",
				action: "Get mail links",
			},
			{
				name: "Do E-Mail Links",
				value: "doMailLinks",
				action: "Do mail links",
			},
			{
				name: "Request E-Mail Signature",
				value: "mailSignature",
				action: "Request mail signature",
			},
		],
		default: "sendMail",
	},
	...sendMail.description,
];

import type { INodeProperties } from "n8n-workflow";

import * as read from "./read";

export { read };

export const descriptions: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["estate"],
			},
		},
		options: [
			{
				name: "Read",
				value: "read",
				description: "Read an estate",
				action: "Read an estate",
			},
		],
		default: "read",
	},
	...read.description,
];

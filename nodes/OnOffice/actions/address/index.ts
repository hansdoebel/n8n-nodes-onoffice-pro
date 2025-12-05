import type { INodeProperties } from "n8n-workflow";

import * as read from "./read";
import * as create from "./create";

export { create, read };

export const descriptions: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["address"],
			},
		},
		options: [
			{
				name: "Read",
				value: "read",
				description: "Read an address",
				action: "Read an address",
			},
			{
				name: "Create",
				value: "create",
				description: "Create an address",
				action: "Create an address",
			},
		],
		default: "read",
	},
	...read.description,
	...create.description,
];

import type { INodeProperties } from 'n8n-workflow';

import * as read from './read';

export { read };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['settings'],
			},
		},
		options: [
			{
				name: 'Read User',
				value: 'readUser',
				action: 'Read user',
			},
			{
				name: 'Get Field Configuration',
				value: 'getFieldConfig',
				action: 'Get field configuration',
			},
		],
		default: 'readUser',
	},
	...read.description,
];

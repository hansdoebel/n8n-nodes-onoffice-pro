import type { INodeProperties } from 'n8n-workflow';
import * as getTemplates from './get';

export { getTemplates };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['templates'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a template',
				action: 'Get a template',
			},
		],
		default: 'get',
	},
	...getTemplates.description,
];

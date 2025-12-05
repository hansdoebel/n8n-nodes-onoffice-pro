import type { INodeProperties } from 'n8n-workflow';

import * as get from './get';

export { get };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['relation'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create relation',
				action: 'Create relation',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get relation',
				action: 'Get relation',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update relation',
				action: 'Update relation',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete relation',
				action: 'Delete relation',
			},
		],
		default: 'get',
	},
	...get.description,
];

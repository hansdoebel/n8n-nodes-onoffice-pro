import type { INodeProperties } from 'n8n-workflow';

export const relationCreateDescription: INodeProperties[] = [
	{
		displayName: 'Address ID',
		name: 'recordids',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['idsfromrelation'],
				operation: ['create'],
			},
		},
	},
];

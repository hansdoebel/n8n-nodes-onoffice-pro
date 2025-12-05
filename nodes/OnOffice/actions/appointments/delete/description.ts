import type { INodeProperties } from 'n8n-workflow';

export const deleteAppointmentDescription: INodeProperties[] = [
	{
		displayName: 'Resource ID',
		name: 'resourceid',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['appointments'],
				operation: ['delete'],
			},
		},
	},
];

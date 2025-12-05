import type { INodeProperties } from 'n8n-workflow';

import * as create from './create';
import * as read from './read';
import * as del from './delete';

export { create, read, del };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['appointments'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create appointment',
				action: 'Create appointment',
			},

			{
				name: 'Read',
				value: 'read',
				description: 'Read appointment',
				action: 'Read appointment',
			},

			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete appointment',
				action: 'Delete appointment',
			},

			/**
			{
				name: 'Get Calendar Resources',
				value: 'getCalendar',
				action: 'Get calendar resources',
			},

			{
				name: 'Send Appointment Confirmation',
				value: 'appointmentConfirmation',
				action: 'Send appointment confirmation',
			},

			{
				name: 'Update',
				value: 'update',
				description: 'Update appointment',
				action: 'Update appointment',
			},

			*/
		],
		default: 'read',
	},
	...create.description,
	...read.description,
	...del.description,
];

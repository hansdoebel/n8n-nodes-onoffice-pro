import type { INodeProperties } from 'n8n-workflow';

export const getTemplatesDescription: INodeProperties[] = [
	{
		displayName: 'Type',
		name: 'type',
		description: 'MANDATORY. Template type to be queried.',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['templates'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Mail',
				value: 'mail',
			},
			{
				name: 'Pdf',
				value: 'pdf',
			},
			{
				name: 'Pdfform',
				value: 'pdfform',
			},
			{
				name: 'Pdfletter',
				value: 'pdfletter',
			},
			{
				name: 'Webexpose',
				value: 'webexpose',
			},
		],
		default: 'mail',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['templates'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'E-Mail Category',
				name: 'category',
				description:
					'Email category of the template. Without the parameter all categories are returned. Only email templates can be filtered via category, no PDF letters and PDF forms.',
				type: 'options',
				options: [
					{
						name: 'AdresseVervollstaendigung',
						value: 'AdresseVervollstaendigung',
					},
					{
						name: 'Aktivitaeten_Bericht',
						value: 'Aktivitaeten_Bericht',
					},
					{
						name: 'appointmentConfirmation',
						value: 'appointmentConfirmation',
					},
					{
						name: 'Cancelation',
						value: 'cancelation',
					},
					{
						name: 'contactShipping',
						value: 'contactShipping',
					},
					{
						name: 'ExposePDFMitInteressent_Vorlage',
						value: 'ExposePDFMitInteressent_Vorlage',
					},
					{
						name: 'Interessenten_Nachweis',
						value: 'Interessenten_Nachweis',
					},
					{
						name: 'Vorlage',
						value: 'Vorlage',
					},
				],
				default: 'AdresseVervollstaendigung',
			},
			{
				displayName: 'E-Mail Template IDs',
				name: 'mailtemplateids',
				description:
					'Contains specific template IDs to which further information is to be returned',
				type: 'string',
				default: '',
			},
			{
				displayName: 'List',
				name: 'list',
				description:
					'Whether a shorter list of all email templates should be returned. This list consists of the ID, the title and the subject. Acts exclusively on email templates.',
				type: 'boolean',
				default: false,
			},
		],
	},
];

import type { INodeProperties } from "n8n-workflow";

export const readAddressDescription: INodeProperties[] = [
	{
		displayName: "Address ID",
		name: "recordids",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				resource: ["address"],
				operation: ["read"],
			},
		},
	},
	{
		displayName: "Parameters",
		name: "parameters",
		type: "multiOptions",
		displayOptions: {
			show: {
				resource: ["address"],
				operation: ["read"],
			},
		},
		options: [
			{
				name: "Anrede, Titel",
				value: "Anrede-Titel",
			},
			{
				name: "Betreuer",
				value: "Benutzer",
			},
			{
				name: "E-Mail",
				value: "Email",
			},
			{
				name: "Eintragsdatum",
				value: "Eintragsdatum",
			},
			{
				name: "Firma",
				value: "Zusatz1",
			},
			{
				name: "Geschlecht",
				value: "Geschlecht",
			},
			{
				name: "Herkunft Kontakt",
				value: "HerkunftKontakt",
			},
			{
				name: "Homepage",
				value: "Homepage",
			},
			{
				name: "Kontaktkategorie",
				value: "contactCategory",
			},
			{
				name: "Land",
				value: "Land",
			},
			{
				name: "Letzter Kontakt",
				value: "letzter_Kontakt",
			},
			{
				name: "Name",
				value: "Name",
			},
			{
				name: "Ort",
				value: "Ort",
			},
			{
				name: "PLZ",
				value: "Plz",
			},
			{
				name: "Straße",
				value: "Strasse",
			},
			{
				name: "Telefonnummer",
				value: "Telefon1",
			},
			{
				name: "Telefonnummer 2",
				value: "Telefon2",
			},
			{
				name: "Vorname",
				value: "Vorname",
			},
		],
		default: [],
	},
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {},
		displayOptions: {
			show: {
				resource: ["address"],
				operation: ["read"],
			},
		},
		options: [
			{
				displayName: "Format Output",
				name: "formatoutput",
				description: "Whether to enable formatted output",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Limit",
				name: "listlimit",
				type: "number",
				typeOptions: {
					maxValue: 500,
					minValue: 0,
					numberStepSize: 1,
				},
				default: 20,
			},
			{
				displayName: "Offset",
				name: "listoffset",
				type: "number",
				default: 0,
			},
			{
				displayName: "Order",
				name: "sortorder",
				description: "Possible values: ASC or DESC. Ascending or descending.",
				type: "options",
				options: [
					{
						name: "Ascending",
						value: "ASC",
					},
					{
						name: "Descending",
						value: "DESC",
					},
				],
				default: "ASC",
			},
			{
				displayName: "Sort By",
				name: "sortby",
				description: "Field to sort by",
				type: "string",
				default: "",
			},
		],
	},
];

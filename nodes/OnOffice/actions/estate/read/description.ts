import type { INodeProperties } from "n8n-workflow";

export const readEstateDescription: INodeProperties[] = [
	{
		displayName: "Estate ID",
		name: "resourceid",
		type: "string",
		default: "",
		description: "Enter the value of only one Estate",
		displayOptions: {
			show: {
				resource: ["estate"],
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
				resource: ["estate"],
				operation: ["read"],
			},
		},
		options: [
			{
				name: "Autom. Exposéversand",
				value: "autoExpose",
			},
			{
				name: "Betreuer",
				value: "benutzer",
			},
			{
				name: "Einheit",
				value: "einheit",
			},
			{
				name: "Estate ID",
				value: "Id",
			},
			{
				name: "Hausnummer",
				value: "hausnummer",
			},
			{
				name: "Nutzungsart",
				value: "nutzungsart",
			},
			{
				name: "Objektart",
				value: "objektart",
			},
			{
				name: "Objektnummer (Extern)",
				value: "objektnr_extern",
			},
			{
				name: "Objekttyp",
				value: "objekttyp",
			},
			{
				name: "Ort",
				value: "ort",
			},
			{
				name: "PLZ",
				value: "plz",
			},
			{
				name: "Stammobjekt",
				value: "stammobjekt",
			},
			{
				name: "Straße",
				value: "strasse",
			},
			{
				name: "Vermarktungsart",
				value: "vermarktungsart",
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
				resource: ["estate"],
				operation: ["read"],
			},
		},
		options: [
			{
				displayName: "Format Output",
				name: "formatoutput",
				description: "Whether to enable formatted output",
				type: "boolean",
				default: true,
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
				displayName: "Mobile URL",
				name: "addMobileUrl",
				description: "Whether to add mobile URL",
				type: "boolean",
				default: true,
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

import type { INodeProperties } from "n8n-workflow";

export const generatePDFExposeDescription: INodeProperties[] = [
  {
    displayName: "Estate ID",
    name: "estateid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["generatePDFExpose"],
      },
    },
    default: 0,
  },
  {
    displayName: "Template",
    name: "template",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["generatePDFExpose"],
      },
    },
    default: "",
  },
  {
    displayName: "Additional Options",
    name: "additionalOptions",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["generatePDFExpose"],
      },
    },
    options: [
      {
        displayName: "Address IDs",
        name: "addressids",
        type: "string",
        default: "",
      },
      {
        displayName: "Force Estate Location",
        name: "forceEstateLocation",
        type: "boolean",
        default: false,
      },
      {
        displayName: "GZ Compress",
        name: "gzcompress",
        type: "boolean",
        default: true,
      },
      {
        displayName: "Language",
        name: "language",
        type: "string",
        default: "",
      },
    ],
  },
];

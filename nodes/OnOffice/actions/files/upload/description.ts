import type { INodeProperties } from "n8n-workflow";

export const uploadFileDescription: INodeProperties[] = [
  {
    displayName: "Relation Type",
    name: "relationtype",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["files"],
        operation: ["upload"],
      },
    },
    options: [
      { name: "Address", value: "address" },
      { name: "Estate", value: "estate" },
    ],
    default: "estate",
  },
  {
    displayName: "Related ID",
    name: "relatedid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["files"],
        operation: ["upload"],
      },
    },
    default: 0,
  },
  {
    displayName: "File Content",
    name: "filecontent",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["files"],
        operation: ["upload"],
      },
    },
    default: "",
  },
  {
    displayName: "Filename",
    name: "filename",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["files"],
        operation: ["upload"],
      },
    },
    default: "",
  },
];

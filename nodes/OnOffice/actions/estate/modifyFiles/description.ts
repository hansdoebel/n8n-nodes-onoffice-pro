import type { INodeProperties } from "n8n-workflow";

export const modifyEstateFilesDescription: INodeProperties[] = [
  {
    displayName: "File ID",
    name: "fileId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["modifyFiles"],
      },
    },
    default: 0,
  },
  {
    displayName: "Data",
    name: "data",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["modifyFiles"],
      },
    },
    options: [
      {
        displayName: "Art",
        name: "Art",
        type: "string",
        default: "",
      },
      {
        displayName: "Dateiname",
        name: "Dateiname",
        type: "string",
        default: "",
      },
      {
        displayName: "Freitext",
        name: "Freitext",
        type: "string",
        default: "",
      },
      {
        displayName: "Titel",
        name: "Titel",
        type: "string",
        default: "",
      },
    ],
  },
];

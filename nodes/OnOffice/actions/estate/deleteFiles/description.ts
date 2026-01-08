import type { INodeProperties } from "n8n-workflow";

export const deleteEstateFilesDescription: INodeProperties[] = [
  {
    displayName: "File ID",
    name: "fileId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["deleteFiles"],
      },
    },
    default: 0,
  },
  {
    displayName: "Relation Type",
    name: "relationtype",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["deleteFiles"],
      },
    },
    options: [
      { name: "Estate", value: "estate" },
    ],
    default: "estate",
  },
];

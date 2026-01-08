import type { INodeProperties } from "n8n-workflow";

export const quickSearchDescription: INodeProperties[] = [
  {
    displayName: "Search Term",
    name: "searchTerm",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["quickSearch"],
      },
    },
    default: "",
  },
];

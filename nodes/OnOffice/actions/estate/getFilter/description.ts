import type { INodeProperties } from "n8n-workflow";

export const getFilterDescription: INodeProperties[] = [
  {
    displayName: "Module",
    name: "module",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getFilter"],
      },
    },
    options: [
      {
        name: "Address",
        value: "address",
      },
      {
        name: "Estate",
        value: "estate",
      },
    ],
    default: "estate",
    description: "Module for which to retrieve filters",
  },
];

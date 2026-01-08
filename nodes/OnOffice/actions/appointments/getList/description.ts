import type { INodeProperties } from "n8n-workflow";

export const getAppointmentsListDescription: INodeProperties[] = [
  {
    displayName: "Additional Options",
    name: "additionalOptions",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["getList"],
      },
    },
    options: [
      {
        displayName: "Date From",
        name: "dateFrom",
        type: "string",
        default: "",
      },
      {
        displayName: "Date To",
        name: "dateTo",
        type: "string",
        default: "",
      },
      {
        displayName: "List Limit",
        name: "listlimit",
        type: "number",
        default: 20,
      },
      {
        displayName: "List Offset",
        name: "listoffset",
        type: "number",
        default: 0,
      },
    ],
  },
];

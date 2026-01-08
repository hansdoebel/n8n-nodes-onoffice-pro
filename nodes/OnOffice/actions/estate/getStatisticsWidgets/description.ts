import type { INodeProperties } from "n8n-workflow";

export const getStatisticsWidgetsDescription: INodeProperties[] = [
  {
    displayName: "Module",
    name: "module",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getStatisticsWidgets"],
      },
    },
    options: [
      {
        name: "Estate",
        value: "estate",
      },
    ],
    default: "estate",
    description: "Module for statistics widgets",
  },
];

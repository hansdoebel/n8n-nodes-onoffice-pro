import type { INodeProperties } from "n8n-workflow";

export const readTaskDescription: INodeProperties[] = [
  {
    displayName: "Task ID",
    name: "taskId",
    type: "number",
    default: 0,
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["read"],
      },
    },
    description:
      "Specific task ID to read. Leave empty to read multiple tasks with filters.",
  },
  {
    displayName: "Data Fields",
    name: "data",
    type: "string",
    default: "Betreff,Aufgabe",
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["read"],
      },
    },
    description:
      "Comma-separated list of fields to retrieve (e.g., Betreff,Aufgabe,Status,Deadline)",
  },
  {
    displayName: "Additional Options",
    name: "additionalOptions",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["read"],
      },
    },
    options: [
      {
        displayName: "Add Mobile URL",
        name: "addMobileUrl",
        type: "boolean",
        default: false,
        description: "Whether to include mobile URL in response",
      },
      {
        displayName: "List Limit",
        name: "listlimit",
        type: "number",
        default: 20,
        description: "Maximum number of tasks to return (max: 500)",
      },
      {
        displayName: "Related Address ID",
        name: "relatedAddressId",
        type: "number",
        default: 0,
        description: "Address ID linked with the task",
      },
      {
        displayName: "Related Estate ID",
        name: "relatedEstateId",
        type: "number",
        default: 0,
        description: "Estate ID linked with the task",
      },
      {
        displayName: "Related Project IDs",
        name: "relatedProjectIds",
        type: "number",
        default: 0,
        description: "Project IDs linked with the task",
      },
      {
        displayName: "Show Efforts",
        name: "showEfforts",
        type: "boolean",
        default: false,
        description: "Whether to show actual efforts and remaining workload",
      },
    ],
  },
];

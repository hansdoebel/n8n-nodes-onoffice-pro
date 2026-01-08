import type { INodeProperties } from "n8n-workflow";

export const updateTaskDescription: INodeProperties[] = [
  {
    displayName: "Task ID",
    name: "taskId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["update"],
      },
    },
    default: 0,
    description: "The ID of the task to update",
  },
  {
    displayName: "Data",
    name: "data",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["update"],
      },
    },
    options: [
      {
        displayName: "Completed (Erledigt)",
        name: "erledigt",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Deadline",
        name: "Deadline",
        type: "string",
        default: "",
        description: "Format: YYYY-MM-DD HH:mm:ss",
      },
      {
        displayName: "Priority (Prio)",
        name: "Prio",
        type: "options",
        options: [
          { name: "Highest", value: 1 },
          { name: "High", value: 2 },
          { name: "Normal", value: 3 },
          { name: "Low", value: 4 },
          { name: "Lowest", value: 5 },
        ],
        default: 3,
      },
      {
        displayName: "Processor (Bearbeiter)",
        name: "Bearbeiter",
        type: "string",
        default: "",
      },
      {
        displayName: "Responsibility (Verantwortung)",
        name: "Verantwortung",
        type: "string",
        default: "",
      },
      {
        displayName: "Status",
        name: "Status",
        type: "options",
        options: [
          { name: "Not Started", value: 1 },
          { name: "In Process", value: 2 },
          { name: "Completed", value: 3 },
          { name: "Deferred", value: 4 },
          { name: "Cancelled", value: 5 },
          { name: "Miscellaneous", value: 6 },
          { name: "Checked", value: 7 },
          { name: "Need Clarification", value: 8 },
        ],
        default: 1,
      },
      {
        displayName: "Subject (Betreff)",
        name: "Betreff",
        type: "string",
        default: "",
      },
      {
        displayName: "Task Description (Aufgabe)",
        name: "Aufgabe",
        type: "string",
        default: "",
      },
    ],
  },
];

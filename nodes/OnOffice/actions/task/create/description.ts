import type { INodeProperties } from "n8n-workflow";

export const createTaskDescription: INodeProperties[] = [
  {
    displayName: "Data",
    name: "data",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["create"],
      },
    },
    options: [
      {
        displayName: "Deadline",
        name: "Deadline",
        type: "string",
        default: "",
        description: "Format: YYYY-MM-DD HH:mm:ss",
      },
      {
        displayName: "Deadline Strict",
        name: "Deadline_strikt",
        type: "boolean",
        default: false,
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
        description: "User name",
      },
      {
        displayName: "Responsibility (Verantwortung)",
        name: "Verantwortung",
        type: "string",
        default: "",
        description: "User name or group name",
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
  {
    displayName: "Related Address ID",
    name: "relatedAddressId",
    type: "number",
    default: 0,
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["create"],
      },
    },
  },
  {
    displayName: "Related Estate ID",
    name: "relatedEstateId",
    type: "number",
    default: 0,
    displayOptions: {
      show: {
        resource: ["task"],
        operation: ["create"],
      },
    },
  },
];

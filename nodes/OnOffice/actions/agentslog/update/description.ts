import type { INodeProperties } from "n8n-workflow";

export const updateAgentslogDescription: INodeProperties[] = [
  {
    displayName: "Agentslog ID",
    name: "agentslogId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["agentslog"],
        operation: ["update"],
      },
    },
    default: 0,
    description: "The ID of the agentslog entry to update",
  },
  {
    displayName: "Data",
    name: "data",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["agentslog"],
        operation: ["update"],
      },
    },
    options: [
      {
        displayName: "Action Kind",
        name: "actionkind",
        type: "string",
        default: "",
        description: "Kind of action (Aktionsart)",
      },
      {
        displayName: "Action Type",
        name: "actiontype",
        type: "string",
        default: "",
        description: "Action type (Aktionstyp)",
      },
      {
        displayName: "Cost",
        name: "cost",
        type: "number",
        default: 0,
        description: "Costs",
      },
      {
        displayName: "Date Time",
        name: "datetime",
        type: "string",
        default: "",
        description:
          "Date and time in format Y-m-d H:i:s (e.g. 2025-11-17 15:30:25)",
      },
      {
        displayName: "Duration (Seconds)",
        name: "duration",
        type: "number",
        default: 0,
        description: "Duration in seconds",
      },
      {
        displayName: "Features",
        name: "features",
        type: "string",
        default: "",
        description:
          "Comma-separated list of features/characteristics (Merkmal)",
      },
      {
        displayName: "Note",
        name: "note",
        type: "string",
        default: "",
        description: "Note (Bemerkung)",
      },
      {
        displayName: "Origin Contact",
        name: "origincontact",
        type: "string",
        default: "",
        description: "Type of contact (Herkunft Kontakt)",
      },
    ],
  },
];

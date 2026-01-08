import type { INodeProperties } from "n8n-workflow";

export const createAgentslogDescription: INodeProperties[] = [
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["agentslog"],
        operation: ["create"],
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
        displayName: "Address IDs",
        name: "addressids",
        type: "string",
        default: "",
        description: "Comma-separated list of address IDs to link",
      },
      {
        displayName: "Advisory Level",
        name: "advisorylevel",
        type: "options",
        options: [
          { name: "A", value: "A" },
          { name: "B", value: "B" },
          { name: "C", value: "C" },
          { name: "D", value: "D" },
          { name: "E", value: "E" },
          { name: "F", value: "F" },
          { name: "G (Cancellation)", value: "G" },
        ],
        default: "A",
        description: "Advisory level (Beratungsebene)",
      },
      {
        displayName: "Appointment ID",
        name: "appointmentid",
        type: "number",
        default: 0,
        description: "Appointment ID to link",
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
          "Date and time in format Y-m-d H:i:s (e.g. 2021-02-08 11:13:30). If not set, current date and time are used.",
      },
      {
        displayName: "Duration (Seconds)",
        name: "duration",
        type: "number",
        default: 0,
        description: "Duration in seconds",
      },
      {
        displayName: "Estate ID",
        name: "estateid",
        type: "number",
        default: 0,
        description: "Estate ID to link",
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
        displayName: "File IDs",
        name: "fileids",
        type: "string",
        default: "",
        description: "Comma-separated list of file IDs to link",
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
      {
        displayName: "Project ID",
        name: "projectid",
        type: "number",
        default: 0,
        description: "Project ID to link",
      },
      {
        displayName: "Reason Cancellation",
        name: "reasoncancellation",
        type: "string",
        default: "",
        description:
          "Reason of cancellation (Absagegrund). Works with advisory level G.",
      },
      {
        displayName: "Task ID",
        name: "taskid",
        type: "number",
        default: 0,
        description: "Task ID to link",
      },
      {
        displayName: "User ID",
        name: "userid",
        type: "number",
        default: 0,
        description:
          "User ID for Support (Betreuer). If not set, logged in user is used.",
      },
    ],
  },
];

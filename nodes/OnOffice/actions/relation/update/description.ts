import type { INodeProperties } from "n8n-workflow";

export const updateRelationDescription: INodeProperties[] = [
  {
    displayName: "Parent IDs",
    name: "parentIds",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["update"],
      },
    },
    default: "",
    description: "Comma-separated list of parent IDs",
  },
  {
    displayName: "Child IDs",
    name: "childIds",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["update"],
      },
    },
    default: "",
    description: "Comma-separated list of child IDs",
  },
  {
    displayName: "Relation Type",
    name: "relationtype",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["update"],
      },
    },
    default: "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
    description: "Relation type URN",
  },
  {
    displayName: "Relation Info",
    name: "relationinfo",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["update"],
      },
    },
    options: [
      {
        displayName: "Confirmation Status",
        name: "statusTerminbestaetigung",
        type: "options",
        options: [
          { name: "Confirmed", value: "bestätigt" },
          { name: "Sent", value: "gesendet" },
          { name: "Cancelled", value: "gecancelt" },
          { name: "Not Set", value: "nicht gesetzt" },
        ],
        default: "bestätigt",
        description: "Appointment confirmation status",
      },
      {
        displayName: "Feedback Status",
        name: "statusTerminrueckmeldung",
        type: "options",
        options: [
          { name: "Active", value: "aktiv" },
          { name: "Inactive", value: "inaktiv" },
        ],
        default: "aktiv",
        description: "Appointment feedback status",
      },
    ],
  },
];

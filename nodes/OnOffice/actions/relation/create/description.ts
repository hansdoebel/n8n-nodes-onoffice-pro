import type { INodeProperties } from "n8n-workflow";

export const createRelationDescription: INodeProperties[] = [
  {
    displayName: "Parent IDs",
    name: "parentIds",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["create"],
      },
    },
    default: "",
    description:
      "Comma-separated list of parent IDs (e.g., estate IDs, appointment IDs)",
  },
  {
    displayName: "Child IDs",
    name: "childIds",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["create"],
      },
    },
    default: "",
    description: "Comma-separated list of child IDs (e.g., address IDs)",
  },
  {
    displayName: "Relation Type",
    name: "relationtype",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["create"],
      },
    },
    options: [
      {
        name: "Address - Contact: Address",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:address:contact:address",
      },
      {
        name: "Address - User: Sync",
        value: "urn:onoffice-de-ns:smart:2.5:relationTypes:address:user:sync",
      },
      {
        name: "Agents Log - Address",
        value: "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:address",
      },
      {
        name: "Agents Log - Estate",
        value: "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:estate",
      },
      {
        name: "Agents Log - File Attachment",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:agentsLog:file:attachment",
      },
      {
        name: "Calendar - Address",
        value: "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
      },
      {
        name: "Calendar - Estate",
        value: "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:estate",
      },
      {
        name: "Estate - Address: All Contact Persons",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPersonAll",
      },
      {
        name: "Estate - Address: Buyer",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer",
      },
      {
        name: "Estate - Address: Contact Person",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:contactPerson",
      },
      {
        name: "Estate - Address: Interested",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested",
      },
      {
        name: "Estate - Address: Owner",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:owner",
      },
      {
        name: "Estate - Address: Tenant",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter",
      },
      {
        name: "Estate - Estate Unit",
        value: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:estateUnit",
      },
    ],
    default: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer",
  },
  {
    displayName: "Relation Info",
    name: "relationinfo",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["create"],
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
        default: "nicht gesetzt",
        description: "Appointment confirmation status",
      },
    ],
  },
];

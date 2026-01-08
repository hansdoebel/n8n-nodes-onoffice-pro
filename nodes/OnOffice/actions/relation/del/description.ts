import type { INodeProperties } from "n8n-workflow";

export const deleteRelationDescription: INodeProperties[] = [
  {
    displayName: "Parent ID",
    name: "parentId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["delete"],
      },
    },
    default: 0,
    description: "Parent ID (e.g., estate ID, appointment ID)",
  },
  {
    displayName: "Child ID",
    name: "childId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["delete"],
      },
    },
    default: 0,
    description: "Child ID (e.g., address ID)",
  },
  {
    displayName: "Relation Type",
    name: "relationtype",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["delete"],
      },
    },
    options: [
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
    default: "urn:onoffice-de-ns:smart:2.5:relationTypes:calendar:address",
  },
];

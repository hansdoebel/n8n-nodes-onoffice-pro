import type { INodeProperties } from "n8n-workflow";

export const getRelationDescription: INodeProperties[] = [
  {
    displayName: "Relation",
    name: "relationtype",
    type: "options",
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["get"],
      },
    },
    options: [
      {
        name: "Buyer",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer",
      },
      {
        name: "Interested",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:interested",
      },
      {
        name: "Tenant",
        value:
          "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:renter",
      },
    ],
    default: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer",
  },
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["get"],
      },
    },
    options: [
      {
        displayName: "Parent IDs",
        name: "parentids",
        type: "string",
        description:
          "An array of IDs to look for linked IDs on the other side (child IDs). If parentids are specified, the parameter childIds (which is being sought) must not be set.",
        default: "",
      },
      {
        displayName: "Child IDs",
        name: "childids",
        type: "string",
        description:
          "Similar to the parameter parentIds. (If childIds is specified, the parentids are returned).",
        default: "",
      },
    ],
  },
];

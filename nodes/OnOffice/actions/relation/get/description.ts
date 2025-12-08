import type { INodeProperties } from "n8n-workflow";
import { getRelationTypeOptions } from "../../../utils/relationTypes";

export const getRelationDescription: INodeProperties[] = [
  {
    displayName: "Relation Type",
    name: "relationtype",
    type: "options",
    displayOptions: {
      show: {
        resource: ["relation"],
        operation: ["get"],
      },
    },
    options: getRelationTypeOptions(),
    default: "urn:onoffice-de-ns:smart:2.5:relationTypes:estate:address:buyer",
    description:
      "The relation type to query. Options are organized by category.",
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
          "An array of IDs to look for linked IDs on the other side (child IDs). If parentids are specified, the parameter childIds (which is being sought) must not be set. Comma-separated numbers.",
        default: "",
      },
      {
        displayName: "Child IDs",
        name: "childids",
        type: "string",
        description:
          "Similar to the parameter parentIds. (If childIds is specified, the parentids are returned). Comma-separated numbers.",
        default: "",
      },
    ],
  },
];

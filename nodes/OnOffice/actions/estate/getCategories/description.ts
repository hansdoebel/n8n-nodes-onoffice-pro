import type { INodeProperties } from "n8n-workflow";

export const getEstateCategoriesDescription: INodeProperties[] = [
  {
    displayName: "Operation Info",
    name: "operationInfo",
    type: "notice",
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getCategories"],
      },
    },
    default: "",
  },
];

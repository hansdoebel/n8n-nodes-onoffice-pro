import type { INodeProperties } from "n8n-workflow";

export const getAddressCompletionFieldsDescription: INodeProperties[] = [
  {
    displayName: "Operation Info",
    name: "operationInfo",
    type: "notice",
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["getCompletionFields"],
      },
    },
    default: "",
  },
];

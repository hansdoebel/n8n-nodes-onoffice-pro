import type { INodeProperties } from "n8n-workflow";

export const getDefaultAttachmentsDescription: INodeProperties[] = [
  {
    displayName: "Operation Info",
    name: "operationInfo",
    type: "notice",
    displayOptions: {
      show: {
        resource: ["files"],
        operation: ["getDefaultAttachments"],
      },
    },
    default: "",
  },
];

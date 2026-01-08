import type { INodeProperties } from "n8n-workflow";

import * as upload from "./upload";
import * as getDefaultAttachments from "./getDefaultAttachments";

export { getDefaultAttachments, upload };

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["files"],
      },
    },
    options: [
      {
        name: "Get Default Attachments",
        value: "getDefaultAttachments",
        description: "Get default attachment templates",
        action: "Get default attachment templates",
      },
      {
        name: "Upload",
        value: "upload",
        description: "Upload a file",
        action: "Upload a file",
      },
    ],
    default: "upload",
  },
  ...upload.description,
  ...getDefaultAttachments.description,
];

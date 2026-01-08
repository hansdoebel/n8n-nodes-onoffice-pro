import type { INodeProperties } from "n8n-workflow";

import * as read from "./read";
import * as create from "./create";
import * as update from "./update";

export { create, read, update };

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["agentslog"],
      },
    },
    options: [
      {
        name: "Read",
        value: "read",
        description: "Read an agentslog",
        action: "Read an agentslog",
      },
      {
        name: "Create",
        value: "create",
        description: "Create an agentslog entry",
        action: "Create an agentslog entry",
      },
      {
        name: "Update",
        value: "update",
        description: "Update an agentslog entry",
        action: "Update an agentslog entry",
      },
    ],
    default: "read",
  },
  ...read.description,
  ...create.description,
  ...update.description,
];

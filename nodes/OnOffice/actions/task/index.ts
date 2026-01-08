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
        resource: ["task"],
      },
    },
    options: [
      {
        name: "Read",
        value: "read",
        description: "Read a task",
        action: "Read a task",
      },
      {
        name: "Create",
        value: "create",
        description: "Create a task",
        action: "Create a task",
      },
      {
        name: "Update",
        value: "update",
        description: "Update a task",
        action: "Update a task",
      },
    ],
    default: "read",
  },
  ...read.description,
  ...create.description,
  ...update.description,
];

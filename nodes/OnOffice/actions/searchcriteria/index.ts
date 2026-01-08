import type { INodeProperties } from "n8n-workflow";

import * as read from "./read";
import * as create from "./create";
import * as update from "./update";
import * as deleteOp from "./delete";

export { create, deleteOp, read, update };

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
      },
    },
    options: [
      {
        name: "Create",
        value: "create",
        description: "Create search criteria",
        action: "Create search criteria",
      },
      {
        name: "Delete",
        value: "delete",
        description: "Delete search criteria",
        action: "Delete search criteria",
      },
      {
        name: "Read",
        value: "read",
        description: "Read search criteria",
        action: "Read search criteria",
      },
      {
        name: "Update",
        value: "update",
        description: "Update search criteria",
        action: "Update search criteria",
      },
    ],
    default: "read",
  },
  ...read.description,
  ...create.description,
  ...update.description,
  ...deleteOp.description,
];

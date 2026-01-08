import type { INodeProperties } from "n8n-workflow";

import * as get from "./get";
import * as create from "./create";
import * as update from "./update";
import * as del from "./del";

export { create, del, get, update };

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["relation"],
      },
    },
    options: [
      {
        name: "Get",
        value: "get",
        description: "Get relation",
        action: "Get relation",
      },
      {
        name: "Create",
        value: "create",
        description: "Create relation",
        action: "Create relation",
      },
      {
        name: "Update",
        value: "update",
        description: "Update relation",
        action: "Update relation",
      },
      {
        name: "Delete",
        value: "delete",
        description: "Delete relation",
        action: "Delete relation",
      },
    ],
    default: "get",
  },
  ...get.description,
  ...create.description,
  ...update.description,
  ...del.description,
];

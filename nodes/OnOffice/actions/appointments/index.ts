import type { INodeProperties } from "n8n-workflow";

import * as create from "./create";
import * as read from "./read";
import * as del from "./delete";
import * as update from "./update";
import * as getList from "./getList";
import * as getFiles from "./getFiles";
import * as sendConfirmation from "./sendConfirmation";

export { create, del, getFiles, getList, read, sendConfirmation, update };

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["appointments"],
      },
    },
    options: [
      {
        name: "Create",
        value: "create",
        description: "Create appointment",
        action: "Create appointment",
      },
      {
        name: "Delete",
        value: "delete",
        description: "Delete appointment",
        action: "Delete appointment",
      },
      {
        name: "Get Files",
        value: "getFiles",
        description: "Get appointment files",
        action: "Get appointment files",
      },
      {
        name: "Get List",
        value: "getList",
        description: "Get appointments list",
        action: "Get appointments list",
      },
      {
        name: "Read",
        value: "read",
        description: "Read appointment",
        action: "Read appointment",
      },
      {
        name: "Send Confirmation",
        value: "sendConfirmation",
        description: "Send appointment confirmation",
        action: "Send appointment confirmation",
      },
      {
        name: "Update",
        value: "update",
        description: "Update appointment",
        action: "Update appointment",
      },
    ],
    default: "read",
  },
  ...create.description,
  ...read.description,
  ...update.description,
  ...del.description,
  ...getList.description,
  ...getFiles.description,
  ...sendConfirmation.description,
];

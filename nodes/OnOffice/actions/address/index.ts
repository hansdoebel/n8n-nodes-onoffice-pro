import type { INodeProperties } from "n8n-workflow";

import * as read from "./read";
import * as create from "./create";
import * as update from "./update";
import * as search from "./search";
import * as getFiles from "./getFiles";
import * as downloadFiles from "./downloadFiles";
import * as getCompletionFields from "./getCompletionFields";
import * as sendCompletion from "./sendCompletion";
import * as getSelectValues from "./getSelectValues";
import * as newsletterRegistration from "./newsletterRegistration";

export {
  create,
  downloadFiles,
  getCompletionFields,
  getFiles,
  getSelectValues,
  newsletterRegistration,
  read,
  search,
  sendCompletion,
  update,
};

export const descriptions: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["address"],
      },
    },
    options: [
      {
        name: "Create",
        value: "create",
        description: "Create an address",
        action: "Create an address",
      },
      {
        name: "Download Files",
        value: "downloadFiles",
        description: "Get download link for address files",
        action: "Get download link for address files",
      },
      {
        name: "Get Completion Fields",
        value: "getCompletionFields",
        description: "Get fields marked for address completion",
        action: "Get fields marked for address completion",
      },
      {
        name: "Get Files",
        value: "getFiles",
        description: "Get address files metadata",
        action: "Get address files metadata",
      },
      {
        name: "Get Select Values",
        value: "getSelectValues",
        description: "Get single/multiselect field values",
        action: 'Get single multiselect field values',
      },
      {
        name: "Newsletter Registration",
        value: "newsletterRegistration",
        description: "Register/unregister address for newsletter",
        action: 'Register unregister address for newsletter',
      },
      {
        name: "Read",
        value: "read",
        description: "Read an address",
        action: "Read an address",
      },
      {
        name: "Search",
        value: "search",
        description: "Search for addresses",
        action: "Search for addresses",
      },
      {
        name: "Send Completion",
        value: "sendCompletion",
        description: "Send address completion email",
        action: "Send address completion email",
      },
      {
        name: "Update",
        value: "update",
        description: "Update an address",
        action: "Update an address",
      },
    ],
    default: "read",
  },
  ...read.description,
  ...create.description,
  ...update.description,
  ...search.description,
  ...getFiles.description,
  ...downloadFiles.description,
  ...getCompletionFields.description,
  ...sendCompletion.description,
  ...getSelectValues.description,
  ...newsletterRegistration.description,
];

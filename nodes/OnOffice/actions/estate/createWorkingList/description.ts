import type { INodeProperties } from "n8n-workflow";

export const createWorkingListDescription: INodeProperties[] = [
  {
    displayName: "List Name",
    name: "listName",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createWorkingList"],
      },
    },
    default: "",
    description: "Name of the worklist",
  },
  {
    displayName: "Type",
    name: "type",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createWorkingList"],
      },
    },
    options: [
      {
        name: "Address",
        value: "address",
      },
      {
        name: "Estate",
        value: "estate",
      },
    ],
    default: "estate",
    description: "Type of the worklist",
  },
  {
    displayName: "Visibility",
    name: "visibility",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createWorkingList"],
      },
    },
    options: [
      {
        name: "Private List",
        value: 1,
      },
      {
        name: "Public Group List",
        value: 2,
      },
      {
        name: "Public List",
        value: 0,
      },
    ],
    default: 1,
    description: "Visibility of the worklist",
  },
  {
    displayName: "IDs",
    name: "ids",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createWorkingList"],
      },
    },
    default: "",
    description:
      "Comma-separated list of record IDs to include in the worklist",
  },
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createWorkingList"],
      },
    },
    options: [
      {
        displayName: "Group ID",
        name: "groupId",
        type: "number",
        default: 0,
        description: "Group ID for public group lists",
      },
      {
        displayName: "STV Flag",
        name: "stv_flag",
        type: "boolean",
        default: false,
        description: "Whether to create a shop window TV list",
      },
      {
        displayName: "User ID",
        name: "userId",
        type: "number",
        default: 0,
        description: "User ID for private lists",
      },
    ],
  },
];

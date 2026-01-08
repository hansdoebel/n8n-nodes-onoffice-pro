import type { INodeProperties } from "n8n-workflow";

export const createTrackingAccountDescription: INodeProperties[] = [
  {
    displayName: "Account Name",
    name: "accountname",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createTrackingAccount"],
      },
    },
    default: "",
    description: "Account name for the tracking account",
  },
  {
    displayName: "Account Password",
    name: "accountpassword",
    type: "string",
    typeOptions: {
      password: true,
    },
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createTrackingAccount"],
      },
    },
    default: "",
    description: "Password in plain text",
  },
  {
    displayName: "Estate ID",
    name: "estateid",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["createTrackingAccount"],
      },
    },
    default: "",
    description: "Linked estate record ID",
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
        operation: ["createTrackingAccount"],
      },
    },
    options: [
      {
        displayName: "Account Information",
        name: "accountinformation",
        type: "string",
        default: "",
        description: "Description for the account",
      },
      {
        displayName: "Account Note",
        name: "accountnote",
        type: "string",
        default: "",
        description: "Additional comments",
      },
      {
        displayName: "Address ID",
        name: "addressid",
        type: "string",
        default: "",
        description: "Linked address record ID",
      },
    ],
  },
];

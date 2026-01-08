import type { INodeProperties } from "n8n-workflow";

export const getTrackingDetailsDescription: INodeProperties[] = [
  {
    displayName: "Account Name",
    name: "accountname",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getTrackingDetails"],
      },
    },
    default: "",
    description: "Account name of the estate tracking account",
  },
  {
    displayName: "Password",
    name: "password",
    type: "string",
    typeOptions: {
      password: true,
    },
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getTrackingDetails"],
      },
    },
    default: "",
    description: "Password of the estate tracking account",
  },
];

import type { INodeProperties } from "n8n-workflow";

export const sendAddressCompletionDescription: INodeProperties[] = [
  {
    displayName: "Address ID",
    name: "addressId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["sendCompletion"],
      },
    },
    default: 0,
    description: "Target address record and receiver of the email",
  },
  {
    displayName: "Mode",
    name: "mode",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["sendCompletion"],
      },
    },
    options: [
      {
        name: "Address Data Only",
        value: "modus1",
      },
      {
        name: "Address Data + Search Criteria",
        value: "modus2",
      },
    ],
    default: "modus1",
    description: "Mode of address completion",
  },
  {
    displayName: "Email Identity",
    name: "emailidentity",
    type: "string",
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["sendCompletion"],
      },
    },
    default: "",
    description: "Email identity to send from",
  },
];

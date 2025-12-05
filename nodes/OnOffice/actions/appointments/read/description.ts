import type { INodeProperties } from "n8n-workflow";

export const readAppointmentDescription: INodeProperties[] = [
  {
    displayName: "Resource ID",
    name: "resourceid",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["read"],
      },
    },
  },
  {
    displayName: "JSON Parameters",
    name: "jsonParameters",
    type: "boolean",
    default: false,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["read"],
      },
    },
  },
  {
    displayName: "Parameters",
    name: "parameters",
    type: "json",
    typeOptions: {
      alwaysOpenEditWindow: true,
    },
    default: "",
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["read"],
        jsonParameters: [true],
      },
    },
  },
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["read"],
        jsonParameters: [false],
      },
    },
    options: [
      {
        displayName: "Start date",
        name: "datestart",
        description:
          "Start date of the time interval for the requested appointments",
        type: "dateTime",
        default: "",
      },
      {
        displayName: "End date",
        name: "dateend",
        description:
          "End date of the time interval for the requested appointments",
        type: "dateTime",
        default: "",
      },
      {
        displayName: "Modified start",
        name: "modifiedstart",
        description: "Earliest date of last edit for requested appointments",
        type: "dateTime",
        default: "",
      },
      {
        displayName: "Modified end",
        name: "modifiedend",
        description: "Latest date of last edit for requested appointments",
        type: "dateTime",
        default: "",
      },
      {
        displayName: "Users",
        name: "users",
        description:
          "User IDs. Specify here the appointments of which users you want to read out. Works only in combination with the parameters datestart and dateend",
        type: "string",
        placeholder: "Add Users",
        default: {},
      },
      {
        displayName: "All Users",
        name: "allusers",
        description: "Whether to read out all data",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Show Cancelled",
        name: "showcancelled",
        description: "Whether to request cancelled appointments",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Show Confirmation Status",
        name: "showConfirmationStatus",
        description:
          "Whether the overall confirmation status of the appointment is listed as response parameter confirmationStatus",
        type: "boolean",
        default: false,
      },
    ],
  },
];

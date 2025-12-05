import type { INodeProperties } from "n8n-workflow";

export const createAppointmentDescription: INodeProperties[] = [
  {
    displayName: "JSON Parameters",
    name: "jsonParameters",
    type: "boolean",
    default: false,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["create"],
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
        operation: ["create"],
        jsonParameters: [true],
      },
    },
  },
  {
    displayName: "Data",
    name: "data",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["create"],
        jsonParameters: [false],
      },
    },
    options: [
      {
        displayName: "All-Day",
        name: "ganztags",
        description: "Whether All-day appointment",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Appointment creator",
        name: "von",
        description:
          "The user to be entered as the appointment creator at field “von” (creator)",
        type: "string",
        default: "",
      },
      {
        displayName: "Cancelled",
        name: "abgesagt",
        description:
          "Whether appointment status is active or cancelled. Default: false.",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Description",
        name: "description",
        description: "Appointment description",
        type: "string",
        default: "",
      },
      {
        displayName: "End Date",
        name: "dateend",
        description:
          "End date of the time interval for the requested appointments",
        type: "dateTime",
        default: "",
      },
      {
        displayName: "Note",
        name: "note",
        description: "Notes on the appointment",
        type: "string",
        default: "",
      },
      {
        displayName: "Private",
        name: "private",
        description: "Whether Private appointment",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Start Date",
        name: "datestart",
        description:
          "Start date of the time interval for the requested appointments",
        type: "dateTime",
        default: "",
      },
      {
        displayName: "Terminart",
        name: "art",
        description: "Type of appointment",
        type: "string",
        default: "",
      },
    ],
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
        operation: ["create"],
        jsonParameters: [false],
      },
    },
    options: [
      {
        displayName: "Address IDs",
        name: "relatedAddressIds",
        description: "Address IDs to be linked with the appointment",
        type: "string",
        default: "",
      },
      {
        displayName: "Estate ID",
        name: "relatedEstateId",
        description: "Estate ID to be linked with the appointment",
        type: "number",
        typeOptions: {
          minValue: 0,
          numberPrecision: 0,
        },
        default: "",
      },
    ],
  },
];

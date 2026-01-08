import type { INodeProperties } from "n8n-workflow";

export const updateAppointmentDescription: INodeProperties[] = [
  {
    displayName: "Appointment ID",
    name: "appointmentId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["update"],
      },
    },
    default: 0,
    description: "The ID of the appointment to update",
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
        operation: ["update"],
      },
    },
    options: [
      {
        displayName: "All Day",
        name: "ganztags",
        type: "boolean",
        default: false,
        description: "Whether this is an all-day appointment",
      },
      {
        displayName: "Description",
        name: "description",
        type: "string",
        default: "",
        description: "Appointment description",
      },
      {
        displayName: "End Date/Time",
        name: "end_dt",
        type: "string",
        default: "",
        description: "End of the appointment (e.g., 2016-12-11 18:00:00)",
      },
      {
        displayName: "Note",
        name: "note",
        type: "string",
        default: "",
        description: "Notes on the appointment",
      },
      {
        displayName: "Private",
        name: "private",
        type: "boolean",
        default: false,
        description: "Whether this is a private appointment",
      },
      {
        displayName: "Reminder",
        name: "erinnerung",
        type: "options",
        options: [
          { name: "0 Minutes", value: "0 minutes" },
          { name: "1 Day", value: "1 days" },
          { name: "1 Hour", value: "1 hours" },
          { name: "1 Week", value: "1 weeks" },
          { name: "12 Hours", value: "12 hours" },
          { name: "15 Hours", value: "15 hours" },
          { name: "15 Minutes", value: "15 minutes" },
          { name: "2 Days", value: "2 days" },
          { name: "2 Hours", value: "2 hours" },
          { name: "3 Days", value: "3 days" },
          { name: "3 Hours", value: "3 hours" },
          { name: "3 Weeks", value: "3 weeks" },
          { name: "30 Minutes", value: "30 minutes" },
          { name: "5 Minutes", value: "5 minutes" },
        ],
        default: "15 minutes",
        description: "Time of the appointment reminder before the appointment",
      },
      {
        displayName: "Resources",
        name: "ressources",
        type: "string",
        default: "",
        description: "Comma-separated list of resources",
      },
      {
        displayName: "Start Date/Time",
        name: "start_dt",
        type: "string",
        default: "",
        description: "Start of the appointment (e.g., 2016-12-11 17:00:00)",
      },
      {
        displayName: "Status",
        name: "status",
        type: "options",
        options: [
          { name: "Active", value: "active" },
          { name: "Completed", value: "completed" },
          { name: "Canceled", value: "canceled" },
          { name: "Participants Available", value: "participantsAvailable" },
        ],
        default: "active",
        description: "Appointment status",
      },
      {
        displayName: "Type",
        name: "art",
        type: "string",
        default: "",
        description: "Type of appointment",
      },
    ],
  },
  {
    displayName: "Related Address IDs",
    name: "relatedAddressIds",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["update"],
      },
    },
    description: "Comma-separated list of address IDs to link",
  },
  {
    displayName: "Replace Address IDs",
    name: "replaceAddressIds",
    type: "boolean",
    default: false,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["update"],
      },
    },
    description: "Whether to replace existing address links",
  },
  {
    displayName: "Related Estate ID",
    name: "relatedEstateId",
    type: "number",
    default: 0,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["update"],
      },
    },
    description: "Estate ID to link to the appointment",
  },
];

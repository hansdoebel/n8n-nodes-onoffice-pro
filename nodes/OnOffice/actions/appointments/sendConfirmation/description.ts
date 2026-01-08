import type { INodeProperties } from "n8n-workflow";

export const sendAppointmentConfirmationDescription: INodeProperties[] = [
  {
    displayName: "Appointment ID",
    name: "appointmentId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["sendConfirmation"],
      },
    },
    default: 0,
  },
  {
    displayName: "Email Identity",
    name: "emailidentity",
    type: "string",
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["sendConfirmation"],
      },
    },
    default: "",
  },
];

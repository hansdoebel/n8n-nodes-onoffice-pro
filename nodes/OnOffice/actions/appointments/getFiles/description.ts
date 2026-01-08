import type { INodeProperties } from "n8n-workflow";

export const getAppointmentFilesDescription: INodeProperties[] = [
  {
    displayName: "Appointment ID",
    name: "appointmentid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["appointments"],
        operation: ["getFiles"],
      },
    },
    default: 0,
  },
];

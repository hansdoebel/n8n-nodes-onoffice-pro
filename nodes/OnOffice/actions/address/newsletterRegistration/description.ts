import type { INodeProperties } from "n8n-workflow";

export const newsletterRegistrationDescription: INodeProperties[] = [
  {
    displayName: "Address ID",
    name: "addressId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["newsletterRegistration"],
      },
    },
    default: 0,
    description: "The ID of the address to register/unregister for newsletter",
  },
  {
    displayName: "Register",
    name: "register",
    type: "boolean",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["newsletterRegistration"],
      },
    },
    default: true,
    description:
      "Whether to register (true) or unregister (false) for newsletter",
  },
];

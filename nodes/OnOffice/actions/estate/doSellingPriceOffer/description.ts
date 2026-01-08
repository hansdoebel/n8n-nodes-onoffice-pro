import type { INodeProperties } from "n8n-workflow";

export const doSellingPriceOfferDescription: INodeProperties[] = [
  {
    displayName: "Estate ID",
    name: "estateid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["doSellingPriceOffer"],
      },
    },
    default: 0,
  },
  {
    displayName: "Data",
    name: "data",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["doSellingPriceOffer"],
      },
    },
    options: [
      {
        displayName: "Email",
        name: "email",
        type: "string",
								placeholder: 'name@email.com',
        default: "",
      },
      {
        displayName: "First Name",
        name: "firstName",
        type: "string",
        default: "",
      },
      {
        displayName: "Last Name",
        name: "lastName",
        type: "string",
        default: "",
      },
      {
        displayName: "Phone",
        name: "phone",
        type: "string",
        default: "",
      },
    ],
  },
];

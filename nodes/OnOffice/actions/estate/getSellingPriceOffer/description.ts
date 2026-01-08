import type { INodeProperties } from "n8n-workflow";

export const getSellingPriceOfferDescription: INodeProperties[] = [
  {
    displayName: "Estate ID",
    name: "estateid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getSellingPriceOffer"],
      },
    },
    default: 0,
  },
];

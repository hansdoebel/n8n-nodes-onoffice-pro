import type { INodeProperties } from "n8n-workflow";

export const getTenantBuyerSeekerDescription: INodeProperties[] = [
  {
    displayName: "Estate Data",
    name: "estatedata",
    type: "json",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getTenantBuyerSeeker"],
      },
    },
    default: "{}",
    description:
      'JSON object with estate data for matching (e.g., {"plz": "52074", "ort": "Aachen"})',
  },
];

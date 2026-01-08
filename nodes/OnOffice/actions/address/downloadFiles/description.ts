import type { INodeProperties } from "n8n-workflow";

export const downloadAddressFilesDescription: INodeProperties[] = [
  {
    displayName: "Address ID",
    name: "addressid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["downloadFiles"],
      },
    },
    default: 0,
    description: "The ID of the address to download files from",
  },
  {
    displayName: "Language",
    name: "language",
    type: "string",
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["downloadFiles"],
      },
    },
    default: "",
    description:
      "Language for the download page in 3-digit ISO 639 format (e.g., ENG, FRA, DEU)",
  },
];

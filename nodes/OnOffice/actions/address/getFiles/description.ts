import type { INodeProperties } from "n8n-workflow";

export const getAddressFilesDescription: INodeProperties[] = [
  {
    displayName: "Address ID",
    name: "addressid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["getFiles"],
      },
    },
    default: 0,
    description: "The ID of the address to get files from",
  },
  {
    displayName: "Additional Options",
    name: "additionalOptions",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["getFiles"],
      },
    },
    options: [
      {
        displayName: "File ID",
        name: "fileid",
        type: "number",
        default: 0,
        description:
          "Specific file ID to retrieve (includes file content in response)",
      },
      {
        displayName: "List Limit",
        name: "listlimit",
        type: "number",
        default: 20,
        description: "Maximum number of files to return (max: 100)",
      },
      {
        displayName: "List Offset",
        name: "listoffset",
        type: "number",
        default: 0,
        description: "Offset for pagination",
      },
    ],
  },
];

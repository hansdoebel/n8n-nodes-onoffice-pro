import type { INodeProperties } from "n8n-workflow";

export const getEstateFilesDescription: INodeProperties[] = [
  {
    displayName: "Estate ID",
    name: "estateid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getFiles"],
      },
    },
    default: 0,
  },
  {
    displayName: "Additional Options",
    name: "additionalOptions",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getFiles"],
      },
    },
    options: [
      {
        displayName: "Document Attribute",
        name: "documentAttribute",
        type: "string",
        default: "",
      },
      {
        displayName: "File ID",
        name: "fileid",
        type: "number",
        default: 0,
      },
      {
        displayName: "Include Image URL",
        name: "includeImageUrl",
        type: "options",
        options: [
          { name: "Small", value: "small" },
          { name: "Medium", value: "medium" },
          { name: "Original", value: "original" },
        ],
        default: "medium",
      },
      {
        displayName: "List Limit",
        name: "listlimit",
        type: "number",
        default: 20,
      },
      {
        displayName: "List Offset",
        name: "listoffset",
        type: "number",
        default: 0,
      },
      {
        displayName: "Show Is Published On Homepage",
        name: "showispublishedonhomepage",
        type: "boolean",
        default: false,
      },
      {
        displayName: "Show Publication Status",
        name: "showpublicationstatus",
        type: "boolean",
        default: false,
      },
    ],
  },
];

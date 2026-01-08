import type { INodeProperties } from "n8n-workflow";

export const readSearchCriteriaDescription: INodeProperties[] = [
  {
    displayName: "Mode",
    name: "mode",
    type: "options",
    required: true,
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
        operation: ["read"],
      },
    },
    options: [
      { name: "Internal", value: "internal" },
      { name: "External", value: "external" },
      { name: "Search Criteria", value: "searchcriteria" },
      { name: "Filter", value: "filter" },
    ],
    default: "searchcriteria",
    description: "Type of transmitted IDs",
  },
  {
    displayName: "IDs",
    name: "ids",
    type: "string",
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
        operation: ["read"],
        mode: ["internal", "external", "searchcriteria"],
      },
    },
    default: "",
    description: "Comma-separated list of IDs",
  },
  {
    displayName: "Additional Options",
    name: "additionalOptions",
    type: "collection",
    placeholder: "Add Option",
    default: {},
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
        operation: ["read"],
      },
    },
    options: [
      {
        displayName: "List Limit",
        name: "listlimit",
        type: "number",
        default: 20,
        description: "Maximum number of records (max: 500)",
      },
      {
        displayName: "List Offset",
        name: "listoffset",
        type: "number",
        default: 0,
        description: "Offset for pagination",
      },
      {
        displayName: "Sort By",
        name: "sortby",
        type: "string",
        default: "",
      },
      {
        displayName: "Sort Order",
        name: "sortorder",
        type: "options",
        options: [
          { name: "Ascending", value: "ASC" },
          { name: "Descending", value: "DESC" },
        ],
        default: "ASC",
      },
    ],
  },
];

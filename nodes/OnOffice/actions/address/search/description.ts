import type { INodeProperties } from "n8n-workflow";

export const searchAddressDescription: INodeProperties[] = [
  {
    displayName: "Search Input",
    name: "searchInput",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["search"],
      },
    },
    default: "",
    description:
      "Search term to search for in address fields (firstname, surname, company, email, customer number)",
  },
  {
    displayName: "Additional Fields",
    name: "additionalFields",
    type: "collection",
    placeholder: "Add Field",
    default: {},
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["search"],
      },
    },
    options: [
      {
        displayName: "Case Sensitive",
        name: "casesensitive",
        type: "boolean",
        default: false,
        description: "Whether the search should be case-sensitive",
      },
      {
        displayName: "Include Contact Data",
        name: "includecontactdata",
        type: "boolean",
        default: false,
        description:
          "Whether to search all email addresses and telephone numbers, not just default ones",
      },
      {
        displayName: "List Limit",
        name: "listlimit",
        type: "number",
        default: 20,
        description: "Maximum number of records to return",
      },
      {
        displayName: "Search Parameters",
        name: "searchparameter",
        type: "string",
        default: "",
        description:
          "Comma-separated list of fields to include in the search (e.g. Vorname,Name)",
      },
      {
        displayName: "Sort By",
        name: "sortby",
        type: "options",
        options: [
          { name: "Company", value: "Zusatz1" },
          { name: "Contact Category", value: "contactCategory" },
          { name: "Customer Number", value: "KdNr" },
          { name: "Email", value: "Email" },
          { name: "First Name", value: "Vorname" },
          { name: "Last Name", value: "Name" },
        ],
        default: "Name",
        description: "Field to sort results by",
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
        description: "Sort order for results",
      },
    ],
  },
];

import type { INodeProperties } from "n8n-workflow";

export const updateSearchCriteriaDescription: INodeProperties[] = [
  {
    displayName: "Search Criteria ID",
    name: "searchCriteriaId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
        operation: ["update"],
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
        resource: ["searchcriteria"],
        operation: ["update"],
      },
    },
    options: [
      {
        displayName: "Advisor",
        name: "advisor",
        type: "number",
        default: 0,
      },
      {
        displayName: "City",
        name: "range_ort",
        type: "string",
        default: "",
      },
      {
        displayName: "House Number",
        name: "range_hausnummer",
        type: "string",
        default: "",
      },
      {
        displayName: "Marketing Method",
        name: "vermarktungsart",
        type: "string",
        default: "",
      },
      {
        displayName: "PLZ",
        name: "range_plz",
        type: "string",
        default: "",
      },
      {
        displayName: "Property Type",
        name: "objektart",
        type: "string",
        default: "",
      },
      {
        displayName: "Purchase Price From",
        name: "kaufpreis__von",
        type: "string",
        default: "",
      },
      {
        displayName: "Purchase Price To",
        name: "kaufpreis__bis",
        type: "string",
        default: "",
      },
      {
        displayName: "Radius",
        name: "range",
        type: "string",
        default: "",
      },
      {
        displayName: "Street",
        name: "range_strasse",
        type: "string",
        default: "",
      },
    ],
  },
];

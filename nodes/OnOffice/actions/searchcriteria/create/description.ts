import type { INodeProperties } from "n8n-workflow";

export const createSearchCriteriaDescription: INodeProperties[] = [
  {
    displayName: "Address ID",
    name: "addressid",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
        operation: ["create"],
      },
    },
    default: 0,
    description: "Record ID of the linked address",
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
        operation: ["create"],
      },
    },
    options: [
      {
        displayName: "Advisor",
        name: "advisor",
        type: "number",
        default: 0,
        description: "User ID of the advisor",
      },
      {
        displayName: "City (Range_ort)",
        name: "range_ort",
        type: "string",
        default: "",
      },
      {
        displayName: "House Number (Range_hausnummer)",
        name: "range_hausnummer",
        type: "string",
        default: "",
      },
      {
        displayName: "Marketing Method (Vermarktungsart)",
        name: "vermarktungsart",
        type: "string",
        default: "",
      },
      {
        displayName: "PLZ (Range_plz)",
        name: "range_plz",
        type: "string",
        default: "",
      },
      {
        displayName: "Property Type (Objektart)",
        name: "objektart",
        type: "string",
        default: "",
      },
      {
        displayName: "Purchase Price From (Kaufpreis__von)",
        name: "kaufpreis__von",
        type: "string",
        default: "",
      },
      {
        displayName: "Purchase Price To (Kaufpreis__bis)",
        name: "kaufpreis__bis",
        type: "string",
        default: "",
      },
      {
        displayName: "Radius (Range)",
        name: "range",
        type: "string",
        default: "",
      },
      {
        displayName: "Street (Range_strasse)",
        name: "range_strasse",
        type: "string",
        default: "",
      },
    ],
  },
];

import type { INodeProperties } from "n8n-workflow";

export const updateEstateDescription: INodeProperties[] = [
  {
    displayName: "Estate ID",
    name: "estateId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["update"],
      },
    },
    default: 0,
    description: "The ID of the estate to update",
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
        operation: ["update"],
      },
    },
    options: [
      {
        displayName: "City (Ort)",
        name: "ort",
        type: "string",
        default: "",
      },
      {
        displayName: "Country (Land)",
        name: "land",
        type: "string",
        default: "",
        description: "ISO 3166-1 alpha-3 country code",
      },
      {
        displayName: "Living Area (Wohnflaeche)",
        name: "wohnflaeche",
        type: "number",
        default: 0,
      },
      {
        displayName: "Marketing Method (Vermarktungsart)",
        name: "vermarktungsart",
        type: "options",
        options: [
          { name: "Kauf", value: "kauf" },
          { name: "Miete/Pacht", value: "miete_pacht" },
          { name: "Erbpacht", value: "erbpacht" },
          { name: "Leasing", value: "leasing" },
        ],
        default: "kauf",
      },
      {
        displayName: "Number of Rooms (Anzahl_zimmer)",
        name: "anzahl_zimmer",
        type: "number",
        default: 0,
      },
      {
        displayName: "PLZ",
        name: "plz",
        type: "string",
        default: "",
      },
      {
        displayName: "Property Subtype (Objekttyp)",
        name: "objekttyp",
        type: "string",
        default: "",
      },
      {
        displayName: "Property Type (Objektart)",
        name: "objektart",
        type: "options",
        options: [
          { name: "Büro/Praxis", value: "buero_praxen" },
          { name: "Einzelhandel", value: "einzelhandel" },
          {
            name: "Freizeitimmobilie Gewerblich",
            value: "freizeitimmobilie_gewerblich",
          },
          { name: "Gastgewerbe", value: "gastgewerbe" },
          { name: "Grundstück", value: "grundstueck" },
          { name: "Halle/Lager/Produktion", value: "hallen_lager_prod" },
          { name: "Haus", value: "haus" },
          {
            name: "Land- Und Forstwirtschaft",
            value: "land_und_forstwirtschaft",
          },
          { name: "Parken", value: "parken" },
          { name: "Sonstige", value: "sonstige" },
          { name: "Wohnung", value: "wohnung" },
          { name: "Zimmer", value: "zimmer" },
        ],
        default: "haus",
      },
      {
        displayName: "Purchase Price (Kaufpreis)",
        name: "kaufpreis",
        type: "number",
        default: 0,
      },
      {
        displayName: "Rent (Mietpreis_pro_qm)",
        name: "mietpreis_pro_qm",
        type: "number",
        default: 0,
      },
      {
        displayName: "Reserved (Reserviert)",
        name: "reserviert",
        type: "boolean",
        default: false,
        description: "Whether to set marketing status to reserved",
      },
      {
        displayName: "Sold (Verkauft)",
        name: "verkauft",
        type: "boolean",
        default: false,
        description: "Whether to set marketing status to sold or rented",
      },
      {
        displayName: "Status",
        name: "status",
        type: "options",
        options: [
          { name: "Archive", value: 0 },
          { name: "Active", value: 1 },
          { name: "Pending", value: 2 },
        ],
        default: 1,
      },
      {
        displayName: "Usage Type (Nutzungsart)",
        name: "nutzungsart",
        type: "options",
        options: [
          { name: "Wohnen", value: "wohnen" },
          { name: "Gewerbe", value: "gewerbe" },
          { name: "Anlage", value: "anlage" },
          { name: "WAZ", value: "waz" },
        ],
        default: "wohnen",
      },
      {
        displayName: "User ID (Benutzer)",
        name: "benutzer",
        type: "number",
        default: 0,
        description: "Support/Betreuer user ID",
      },
    ],
  },
];

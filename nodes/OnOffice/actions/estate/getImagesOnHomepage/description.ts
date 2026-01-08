import type { INodeProperties } from "n8n-workflow";

export const getImagesOnHomepageDescription: INodeProperties[] = [
  {
    displayName: "Estate IDs",
    name: "estateids",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getImagesOnHomepage"],
      },
    },
    default: "",
    description: "Comma-separated list of estate IDs",
  },
  {
    displayName: "Categories",
    name: "categories",
    type: "multiOptions",
    required: true,
    displayOptions: {
      show: {
        resource: ["estate"],
        operation: ["getImagesOnHomepage"],
      },
    },
    options: [
      {
        name: "Anzeigen",
        value: "Anzeigen",
      },
      {
        name: "Epass_Skala",
        value: "Epass_Skala",
      },
      {
        name: "Expose",
        value: "Expose",
      },
      {
        name: "Film-Link",
        value: "Film-Link",
      },
      {
        name: "Foto",
        value: "Foto",
      },
      {
        name: "Foto_gross",
        value: "Foto_gross",
      },
      {
        name: "Grundriss",
        value: "Grundriss",
      },
      {
        name: "Lageplan",
        value: "Lageplan",
      },
      {
        name: "Link",
        value: "Link",
      },
      {
        name: "Objekt-Link",
        value: "Objekt-Link",
      },
      {
        name: "Ogulo-Link",
        value: "Ogulo-Link",
      },
      {
        name: "Panorama",
        value: "Panorama",
      },
      {
        name: "Titelbild",
        value: "Titelbild",
      },
    ],
    default: [],
    description: "Type of files to retrieve",
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
        operation: ["getImagesOnHomepage"],
      },
    },
    options: [
      {
        displayName: "Language",
        name: "language",
        type: "string",
        default: "",
        description:
          "Language in three capital letters according to ISO 3166-1 alpha-3",
      },
      {
        displayName: "Publication Setting",
        name: "publicationSetting",
        type: "options",
        options: [
          {
            name: "Homepage",
            value: "Homepage",
          },
          {
            name: "HTML_kurz",
            value: "HTML_kurz",
          },
          {
            name: "HTML_lang",
            value: "HTML_lang",
          },
          {
            name: "PDF_kurz",
            value: "PDF_kurz",
          },
          {
            name: "PDF_lang",
            value: "PDF_lang",
          },
          {
            name: "Web_kurz",
            value: "Web_kurz",
          },
          {
            name: "Web_lang",
            value: "Web_lang",
          },
          {
            name: "Word_kurz",
            value: "Word_kurz",
          },
          {
            name: "Word_lang",
            value: "Word_lang",
          },
        ],
        default: "Homepage",
        description: "Publication target for images",
      },
      {
        displayName: "Size",
        name: "size",
        type: "string",
        default: "original",
        description: "Image size (e.g., 500x500 or original)",
      },
    ],
  },
];

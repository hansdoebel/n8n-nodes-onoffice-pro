import type { INodeProperties } from "n8n-workflow";

export const getAddressSelectValuesDescription: INodeProperties[] = [
  {
    displayName: "Field Name",
    name: "fieldname",
    type: "string",
    required: true,
    displayOptions: {
      show: {
        resource: ["address"],
        operation: ["getSelectValues"],
      },
    },
    default: "",
    description: "Field name of a singleselect or multiselect address field",
  },
];

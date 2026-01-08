import type { INodeProperties } from "n8n-workflow";

export const deleteSearchCriteriaDescription: INodeProperties[] = [
  {
    displayName: "Search Criteria ID",
    name: "searchCriteriaId",
    type: "number",
    required: true,
    displayOptions: {
      show: {
        resource: ["searchcriteria"],
        operation: ["delete"],
      },
    },
    default: 0,
  },
];

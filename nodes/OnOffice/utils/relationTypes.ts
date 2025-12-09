import { INodePropertyOptions } from "n8n-workflow";
import { RELATION_TYPES } from "./constants";

export function getRelationTypeOptions(): INodePropertyOptions[] {
  const options: INodePropertyOptions[] = [];

  for (const [category, types] of Object.entries(RELATION_TYPES)) {
    for (const type of types) {
      options.push({
        name: `[${category}] ${type.name}`,
        value: type.value,
        description: type.description,
      });
    }
  }

  return options;
}

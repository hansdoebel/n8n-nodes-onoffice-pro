import { IDataObject } from "n8n-workflow";

export const COMMON_FIELDS = [
  "formatoutput",
  "listlimit",
  "listoffset",
  "sortby",
  "sortorder",
] as const;

export function extractDefinedFields(
  additionalFields: IDataObject,
  fieldNames: readonly string[] = COMMON_FIELDS,
): IDataObject {
  const result: IDataObject = {};

  for (const fieldName of fieldNames) {
    if (additionalFields[fieldName] !== undefined) {
      result[fieldName] = additionalFields[fieldName];
    }
  }

  return result;
}

export function parseCommaSeparated(input: string): string[] {
  if (!input || typeof input !== "string") {
    return [];
  }

  return input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

export function parseCommaSeparatedNumbers(input: string): number[] {
  if (!input || typeof input !== "string") {
    return [];
  }

  return input
    .split(",")
    .map((item) => item.trim())
    .map((item) => Number(item))
    .filter((num) => !isNaN(num));
}

export function buildParameters(
  baseParameters: IDataObject,
  additionalFields: IDataObject,
  commonFieldNames: readonly string[] = COMMON_FIELDS,
): IDataObject {
  const extractedFields = extractDefinedFields(
    additionalFields,
    commonFieldNames,
  );

  return {
    ...baseParameters,
    ...extractedFields,
  };
}

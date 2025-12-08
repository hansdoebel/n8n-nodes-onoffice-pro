import { IDataObject } from "n8n-workflow";

/**
 * Common field names that appear across multiple OnOffice API operations
 */
export const COMMON_FIELDS = [
  "formatoutput",
  "listlimit",
  "listoffset",
  "sortby",
  "sortorder",
] as const;

/**
 * Extracts defined values from additionalFields for the specified field names.
 * Only includes fields that are defined (not undefined).
 *
 * @param additionalFields - The additionalFields object from node parameters
 * @param fieldNames - Array of field names to extract (defaults to COMMON_FIELDS)
 * @returns Object containing only the defined fields
 */
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

/**
 * Parses a comma-separated string into an array of trimmed strings.
 * Filters out empty strings.
 *
 * @param input - Comma-separated string
 * @returns Array of trimmed, non-empty strings
 */
export function parseCommaSeparated(input: string): string[] {
  if (!input || typeof input !== "string") {
    return [];
  }

  return input
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

/**
 * Parses a comma-separated string into an array of numbers.
 * Filters out invalid numbers (NaN).
 *
 * @param input - Comma-separated string of numbers
 * @returns Array of valid numbers
 */
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

/**
 * Builds parameters object by merging base parameters with additional fields.
 * Automatically extracts common fields from additionalFields.
 *
 * @param baseParameters - Base parameters object
 * @param additionalFields - Additional fields from node parameters
 * @param commonFieldNames - Array of common field names to extract (defaults to COMMON_FIELDS)
 * @returns Merged parameters object
 */
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

import { IDataObject, IExecuteFunctions } from "n8n-workflow";

export function extractString(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
  defaultValue: string = "",
): string {
  const value = context.getNodeParameter(
    parameterName,
    itemIndex,
    defaultValue,
  );
  return typeof value === "string" ? value : String(value);
}

export function extractNumber(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
  defaultValue: number = 0,
): number {
  const value = context.getNodeParameter(
    parameterName,
    itemIndex,
    defaultValue,
  );
  return typeof value === "number" ? value : Number(value);
}

export function extractBoolean(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
  defaultValue: boolean = false,
): boolean {
  const value = context.getNodeParameter(
    parameterName,
    itemIndex,
    defaultValue,
  );
  return Boolean(value);
}

export function extractStringArray(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
  defaultValue: string[] = [],
): string[] {
  const value = context.getNodeParameter(
    parameterName,
    itemIndex,
    defaultValue,
  );
  if (Array.isArray(value)) {
    return value.map((item) => typeof item === "string" ? item : String(item));
  }
  return [];
}

export function extractObject(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
  defaultValue: IDataObject = {},
): IDataObject {
  const value = context.getNodeParameter(
    parameterName,
    itemIndex,
    defaultValue,
  );
  return typeof value === "object" && value !== null
    ? (value as IDataObject)
    : defaultValue;
}

export function extractStringOrEmpty(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
): string {
  const value = context.getNodeParameter(parameterName, itemIndex, "");
  if (typeof value === "string") {
    return value;
  }
  if (value === null || value === undefined) {
    return "";
  }
  return String(value);
}

export function extractNumberOrUndefined(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex: number,
): number | undefined {
  const value = context.getNodeParameter(parameterName, itemIndex, undefined);
  if (value === undefined || value === null) {
    return undefined;
  }
  const num = Number(value);
  return isNaN(num) ? undefined : num;
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is IDataObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === "string" || item === undefined)
  );
}

export function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "number")
  );
}

export function ensureString(
  value: unknown,
  defaultValue: string = "",
): string {
  return isString(value) ? value : defaultValue;
}

export function ensureNumber(value: unknown, defaultValue: number = 0): number {
  const num = Number(value);
  return isNaN(num) ? defaultValue : num;
}

export function ensureBoolean(
  value: unknown,
  defaultValue: boolean = false,
): boolean {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }
  return defaultValue;
}

export function ensureArray<T = unknown>(
  value: unknown,
  defaultValue: T[] = [],
): T[] {
  return Array.isArray(value) ? value : defaultValue;
}

export function ensureObject(
  value: unknown,
  defaultValue: IDataObject = {},
): IDataObject {
  return isObject(value) ? value : defaultValue;
}

import { IExecuteFunctions, NodeOperationError } from "n8n-workflow";

export function validatePositiveInteger(
  context: IExecuteFunctions,
  value: number,
  fieldName: string,
): void {
  if (!Number.isInteger(value) || value <= 0) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} must be a positive integer, got: ${value}`,
    );
  }
}

export function validateNonEmptyString(
  context: IExecuteFunctions,
  value: string,
  fieldName: string,
): void {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} cannot be empty`,
    );
  }
}

export function validateEmail(
  context: IExecuteFunctions,
  email: string,
  fieldName: string,
): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} must be a valid email address, got: ${email}`,
    );
  }
}

export function validateEmailArray(
  context: IExecuteFunctions,
  emails: string[],
  fieldName: string,
): void {
  if (!Array.isArray(emails) || emails.length === 0) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} must be a non-empty array`,
    );
  }
  emails.forEach((email, index) => {
    validateEmail(context, email, `${fieldName}[${index}]`);
  });
}

export function validateEnum<T extends string>(
  context: IExecuteFunctions,
  value: T,
  allowedValues: readonly T[],
  fieldName: string,
): void {
  if (!allowedValues.includes(value)) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} must be one of: ${allowedValues.join(", ")}, got: ${value}`,
    );
  }
}

export function validateArrayOfPositiveIntegers(
  context: IExecuteFunctions,
  values: number[],
  fieldName: string,
): void {
  if (!Array.isArray(values) || values.length === 0) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} must be a non-empty array`,
    );
  }
  values.forEach((value, index) => {
    validatePositiveInteger(context, value, `${fieldName}[${index}]`);
  });
}

export function validateListLimit(
  context: IExecuteFunctions,
  limit: number,
  maxLimit: number = 500,
): void {
  if (!Number.isInteger(limit) || limit <= 0 || limit > maxLimit) {
    throw new NodeOperationError(
      context.getNode(),
      `listlimit must be between 1 and ${maxLimit}, got: ${limit}`,
    );
  }
}

export function validateListOffset(
  context: IExecuteFunctions,
  offset: number,
): void {
  if (!Number.isInteger(offset) || offset < 0) {
    throw new NodeOperationError(
      context.getNode(),
      `listoffset must be a non-negative integer, got: ${offset}`,
    );
  }
}

export function validateNonEmptyObject(
  context: IExecuteFunctions,
  obj: Record<string, unknown>,
  fieldName: string,
): void {
  if (!obj || typeof obj !== "object" || Object.keys(obj).length === 0) {
    throw new NodeOperationError(
      context.getNode(),
      `${fieldName} must be a non-empty object`,
    );
  }
}

export function validateSortOrder(
  context: IExecuteFunctions,
  sortOrder: string,
): void {
  validateEnum(context, sortOrder, ["ASC", "DESC"] as const, "sortorder");
}

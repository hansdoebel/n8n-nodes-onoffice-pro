import { IExecuteFunctions, NodeOperationError } from "n8n-workflow";

interface ErrorContext {
  resource?: string;
  operation?: string;
  itemIndex?: number;
  [key: string]: any;
}

export function handleExecutionError(
  context: IExecuteFunctions,
  error: any,
  errorContext?: ErrorContext,
): never {
  const message = error.message || String(error);
  const itemIndex = errorContext?.itemIndex;

  let errorMessage = "Error executing OnOffice operation";

  if (errorContext?.resource && errorContext?.operation) {
    errorMessage =
      `Error executing ${errorContext.operation} on ${errorContext.resource}`;
  }

  errorMessage += `: ${message}`;

  throw new NodeOperationError(
    context.getNode(),
    errorMessage,
    itemIndex !== undefined ? { itemIndex } : undefined,
  );
}

export function throwValidationError(
  context: IExecuteFunctions,
  message: string,
  itemIndex?: number,
): never {
  throw new NodeOperationError(
    context.getNode(),
    message,
    itemIndex !== undefined ? { itemIndex } : undefined,
  );
}

export function throwMissingParameterError(
  context: IExecuteFunctions,
  parameterName: string,
  itemIndex?: number,
): never {
  throw new NodeOperationError(
    context.getNode(),
    `Missing required parameter: ${parameterName}`,
    itemIndex !== undefined ? { itemIndex } : undefined,
  );
}

export function throwInvalidParameterError(
  context: IExecuteFunctions,
  parameterName: string,
  reason: string,
  itemIndex?: number,
): never {
  throw new NodeOperationError(
    context.getNode(),
    `Invalid parameter '${parameterName}': ${reason}`,
    itemIndex !== undefined ? { itemIndex } : undefined,
  );
}

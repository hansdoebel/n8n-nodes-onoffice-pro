import {
  IExecuteFunctions,
  INodeExecutionData,
  NodeOperationError,
} from "n8n-workflow";

export type ActionHandler = (
  this: IExecuteFunctions,
  itemIndex: number,
) => Promise<INodeExecutionData[]>;

export type ActionRegistry = {
  [resource: string]: {
    [operation: string]: ActionHandler;
  };
};

const actionRegistry: ActionRegistry = {};

export function registerAction(
  resource: string,
  operation: string,
  handler: ActionHandler,
): void {
  if (!actionRegistry[resource]) {
    actionRegistry[resource] = {};
  }

  actionRegistry[resource][operation] = handler;
}

export function getActionHandler(
  resource: string,
  operation: string,
): ActionHandler | undefined {
  return actionRegistry[resource]?.[operation];
}

export async function executeAction(
  context: IExecuteFunctions,
  resource: string,
  operation: string,
  itemIndex: number,
): Promise<INodeExecutionData[]> {
  const handler = getActionHandler(resource, operation);

  if (!handler) {
    throw new NodeOperationError(
      context.getNode(),
      `No handler found for resource '${resource}' and operation '${operation}'`,
      { itemIndex },
    );
  }

  return await handler.call(context, itemIndex);
}

export function getRegisteredResources(): string[] {
  return Object.keys(actionRegistry);
}

export function getRegisteredOperations(resource: string): string[] {
  return Object.keys(actionRegistry[resource] || {});
}

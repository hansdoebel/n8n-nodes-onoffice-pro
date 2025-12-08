import {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";

import { executeAction } from "./actionRegistry";
import { registerAllActions } from "./registerActions";

registerAllActions();

export async function router(
  this: IExecuteFunctions,
): Promise<INodeExecutionData[][]> {
  const items = this.getInputData();
  const operationResult: INodeExecutionData[] = [];

  for (let i = 0; i < items.length; i++) {
    const resource = this.getNodeParameter("resource", i) as string;
    const operation = this.getNodeParameter("operation", i) as string;

    let responseData: IDataObject | IDataObject[] = [];

    responseData = await executeAction(this, resource, operation, i);

    operationResult.push(...this.helpers.returnJsonArray(responseData));
  }

  return [operationResult];
}

import type {
  IDataObject,
  IExecuteFunctions,
  INodeExecutionData,
} from "n8n-workflow";
import { apiRequest } from "./apiRequest";
import { extractResponseData } from "./responseHandler";
import { handleExecutionError } from "./errorHandling";

export interface BaseOperationConfig {
  resourceType: string;
  operation: string;
  resourceId?: string;
}

export interface ParameterExtractor {
  (
    context: IExecuteFunctions,
    index: number,
  ): IDataObject | Promise<IDataObject>;
}

export interface ResponseTransformer {
  (data: IDataObject | IDataObject[]): IDataObject | IDataObject[];
}

export interface ExecuteOperationOptions {
  config: BaseOperationConfig;
  parameterExtractor: ParameterExtractor;
  responseTransformer?: ResponseTransformer;
  validator?: (
    context: IExecuteFunctions,
    parameters: IDataObject,
  ) => void | Promise<void>;
}

export async function executeOperation(
  context: IExecuteFunctions,
  index: number,
  options: ExecuteOperationOptions,
): Promise<INodeExecutionData[]> {
  const { config, parameterExtractor, responseTransformer, validator } =
    options;

  try {
    const parameters = await parameterExtractor(context, index);

    if (validator) {
      await validator(context, parameters);
    }

    const response = await apiRequest.call(context, {
      resourceType: config.resourceType,
      operation: config.operation,
      parameters,
      resourceId: config.resourceId,
    });

    let responseData = extractResponseData(response);

    if (responseTransformer) {
      responseData = responseTransformer(responseData);
    }

    return context.helpers.returnJsonArray(responseData);
  } catch (error) {
    return handleExecutionError(context, error, {
      resource: config.resourceType,
      operation: config.operation,
      itemIndex: index,
    });
  }
}

export function createSimpleParameterExtractor(
  parameterNames: string[],
): ParameterExtractor {
  return (context: IExecuteFunctions, index: number): IDataObject => {
    const parameters: IDataObject = {};
    for (const name of parameterNames) {
      const value = context.getNodeParameter(name, index, undefined);
      if (value !== undefined && value !== null && value !== "") {
        parameters[name] = value;
      }
    }
    return parameters;
  };
}

export function createDataFieldsExtractor(
  dataFieldsParameterName: string = "data",
): ParameterExtractor {
  return (context: IExecuteFunctions, index: number): IDataObject => {
    const dataFields = context.getNodeParameter(
      dataFieldsParameterName,
      index,
      {},
    ) as IDataObject;

    const data: IDataObject = {};
    Object.keys(dataFields).forEach((key) => {
      const value = dataFields[key];
      if (value !== undefined && value !== null && value !== "") {
        data[key] = value;
      }
    });

    return { data };
  };
}

export function combineExtractors(
  ...extractors: ParameterExtractor[]
): ParameterExtractor {
  return async (
    context: IExecuteFunctions,
    index: number,
  ): Promise<IDataObject> => {
    const parameters: IDataObject = {};
    for (const extractor of extractors) {
      const extracted = await extractor(context, index);
      Object.assign(parameters, extracted);
    }
    return parameters;
  };
}

import { IDataObject } from "n8n-workflow";
import { OnOfficeApiResponse } from "./types";

export function extractResponseData(
  response: OnOfficeApiResponse,
): IDataObject | IDataObject[] {
  if (!response) {
    return [];
  }

  if (response.response?.results && Array.isArray(response.response.results)) {
    const results = response.response.results;

    if (results.length === 0) {
      return [];
    }

    if (results.length === 1 && results[0].data) {
      return results[0].data;
    }

    const allData: IDataObject[] = [];
    for (const result of results) {
      if (result.data && Array.isArray(result.data)) {
        allData.push(...result.data);
      } else if (result.data) {
        allData.push(result.data as IDataObject);
      }
    }
    return allData.length > 0 ? allData : [];
  }

  return [];
}

export function isApiResponseSuccess(response: OnOfficeApiResponse): boolean {
  return response.status === "ok" && !response.errors;
}

export function getApiResponseError(
  response: OnOfficeApiResponse,
): string | null {
  if (response.errors && Array.isArray(response.errors)) {
    return response.errors.join(", ");
  }
  if (response.message) {
    return response.message;
  }
  if (response.response?.results) {
    const errors = response.response.results
      .filter((r) => r.status === "error")
      .map((r) => r.errors?.map((e) => e.message).join(", "))
      .filter((msg) => msg)
      .join("; ");
    if (errors) {
      return errors;
    }
  }
  return null;
}

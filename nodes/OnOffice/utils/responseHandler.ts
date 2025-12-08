import { IDataObject } from "n8n-workflow";
import { OnOfficeApiResponse } from "./types";

export function extractResponseData(
  response: OnOfficeApiResponse,
): IDataObject | IDataObject[] {
  if (!response) {
    return [];
  }

  checkForApiErrors(response);

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

function checkForApiErrors(response: OnOfficeApiResponse): void {
  if (!response) {
    return;
  }

  if (response.status?.errorcode && response.status.errorcode !== 0) {
    const errorMessage = response.status.message || "Unknown API error";
    throw new Error(
      `OnOffice API Error (${response.status.errorcode}): ${errorMessage}`,
    );
  }

  if (response.response?.results && Array.isArray(response.response.results)) {
    for (const result of response.response.results) {
      if (result.status?.errorcode && result.status.errorcode !== 0) {
        const errorMessage = result.status.message ||
          "Unknown error in API result";
        throw new Error(
          `OnOffice API Error (${result.status.errorcode}): ${errorMessage}`,
        );
      }
    }
  }
}

export function isApiResponseSuccess(response: OnOfficeApiResponse): boolean {
  return !response.status?.errorcode || response.status.errorcode === 0;
}

export function getApiResponseError(
  response: OnOfficeApiResponse,
): string | null {
  if (response.status?.errorcode && response.status.errorcode !== 0) {
    return response.status.message || "API request failed";
  }

  if (response.errors && Array.isArray(response.errors)) {
    return response.errors.join(", ");
  }

  if (response.message) {
    return response.message;
  }

  return null;
}

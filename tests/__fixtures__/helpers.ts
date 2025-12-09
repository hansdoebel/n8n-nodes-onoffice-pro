import * as fs from "fs";
import * as path from "path";
import { OnOfficeApiResponse } from "../../nodes/OnOffice/utils/types";

function loadFixture(filename: string): OnOfficeApiResponse {
  const fixturePath = path.join(__dirname, "api-responses", filename);
  const content = fs.readFileSync(fixturePath, "utf-8");
  return JSON.parse(content) as OnOfficeApiResponse;
}

export const fixtures = {
  relationSuccess: () => loadFixture("relation-success.json"),
  relationErrorInvalidType: () =>
    loadFixture("relation-error-invalid-type.json"),
  relationEmpty: () => loadFixture("relation-empty.json"),
  addressSuccess: () => loadFixture("address-success.json"),
  agentslogSuccess: () => loadFixture("agentslog-success.json"),
  estateSuccess: () => loadFixture("estate-success.json"),
};

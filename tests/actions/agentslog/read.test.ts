import { IExecuteFunctions } from "n8n-workflow";
import { readAgentslog } from "../../../nodes/OnOffice/actions/agentslog/read/execute";
import { apiRequest } from "../../../nodes/OnOffice/utils/apiRequest";
import agentslogSuccessResponse from "../../__fixtures__/api-responses/agentslog-success.json";

jest.mock("../../../nodes/OnOffice/utils/apiRequest");

describe("OnOffice Agentslog Read Action", () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    mockExecuteFunctions = {
      getNodeParameter: jest.fn(),
      getNode: jest.fn(() => ({
        id: "test-node-id",
        name: "OnOffice",
        type: "n8n-nodes-onoffice.onoffice",
        typeVersion: 1,
        position: [0, 0],
      })),
      helpers: {
        returnJsonArray: (items: any) =>
          Array.isArray(items)
            ? items.map((item) => ({ json: item }))
            : [{ json: items }],
      },
    } as unknown as IExecuteFunctions;

    jest.clearAllMocks();
  });

  describe("Basic read operation", () => {
    it("should successfully read agentslog with addressid and selected fields", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [
            "Objekt_nr",
            "Aktionsart",
            "Aktionstyp",
            "Bemerkung",
            "Datum",
          ];
        }
        if (paramName === "additionalFields") {
          return {
            addressid: "6795",
            filter: {
              Aktionsart: [{ op: "=", val: "Download" }],
            },
            sortby: "Datum",
            sortorder: "DESC",
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          addressid: [6795],
          data: ["Objekt_nr", "Aktionsart", "Aktionstyp", "Bemerkung", "Datum"],
          filter: {
            Aktionsart: [{ op: "=", val: "Download" }],
          },
          sortby: "Datum",
          sortorder: "DESC",
        }),
      });

      expect(result).toHaveLength(1);
      expect(result[0].json).toEqual(
        expect.objectContaining({
          meta: expect.objectContaining({
            cntabsolute: 3,
          }),
          records: expect.arrayContaining([
            expect.objectContaining({
              id: 131751,
              type: "agentslog",
              elements: expect.objectContaining({
                Objekt_nr: "OBJ123",
                Aktionsart: "Download",
              }),
            }),
          ]),
        }),
      );
    });

    it("should handle multiple addressids as comma-separated values", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return ["Objekt_nr", "Datum"];
        }
        if (paramName === "additionalFields") {
          return {
            addressid: "6795,6796,6797",
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          addressid: [6795, 6796, 6797],
          data: ["Objekt_nr", "Datum"],
        }),
      });

      expect(result).toHaveLength(1);
      expect(result[0].json).toHaveProperty("meta");
      expect(result[0].json).toHaveProperty("records");
    });

    it("should handle estateid parameter", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return ["Objekt_nr"];
        }
        if (paramName === "additionalFields") {
          return {
            estateid: "123,456",
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          estateid: [123, 456],
          data: ["Objekt_nr"],
        }),
      });

      expect(result).toHaveLength(1);
      expect(result[0].json).toHaveProperty("meta");
      expect(result[0].json).toHaveProperty("records");
    });

    it("should handle projectid parameter", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return ["Objekt_nr"];
        }
        if (paramName === "additionalFields") {
          return {
            projectid: 999,
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          projectid: 999,
          data: ["Objekt_nr"],
        }),
      });

      expect(result).toHaveLength(1);
      expect(result[0].json).toHaveProperty("meta");
      expect(result[0].json).toHaveProperty("records");
    });
  });

  describe("Filter operations", () => {
    it("should handle filter rules with IN operator", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            filterRules: {
              rule: [
                {
                  field: "Aktionsart",
                  operator: "IN",
                  value: "Download,Email",
                },
              ],
            },
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          filter: {
            Aktionsart: [
              {
                op: "IN",
                val: ["Download", "Email"],
              },
            ],
          },
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should handle filter rules with BETWEEN operator", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            filterRules: {
              rule: [
                {
                  field: "Datum",
                  operator: "BETWEEN",
                  value: "2024-02-01,2024-02-28",
                },
              ],
            },
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          filter: {
            Datum: [
              {
                op: "BETWEEN",
                val: ["2024-02-01", "2024-02-28"],
              },
            ],
          },
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should handle multiple filter rules on different fields", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            filterRules: {
              rule: [
                {
                  field: "Aktionsart",
                  operator: "IN",
                  value: "Download,Email",
                },
                {
                  field: "Datum",
                  operator: "BETWEEN",
                  value: "2024-02-01,2024-02-28",
                },
              ],
            },
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          filter: {
            Aktionsart: [
              {
                op: "IN",
                val: ["Download", "Email"],
              },
            ],
            Datum: [
              {
                op: "BETWEEN",
                val: ["2024-02-01", "2024-02-28"],
              },
            ],
          },
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should handle filter as JSON string", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      const filterObject = {
        Aktionsart: [{ op: "=", val: "Download" }],
      };

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            filter: JSON.stringify(filterObject),
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          filter: filterObject,
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should handle filter as object", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      const filterObject = {
        Aktionsart: [{ op: "=", val: "Download" }],
      };

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            filter: filterObject,
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          filter: filterObject,
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should throw error for invalid JSON filter", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            filter: "invalid json string",
          };
        }
        return undefined;
      });

      await expect(
        readAgentslog.call(mockExecuteFunctions, 0),
      ).rejects.toThrow();
    });
  });

  describe("Pagination and sorting", () => {
    it("should handle pagination parameters", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            listlimit: 50,
            listoffset: 10,
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          listlimit: 50,
          listoffset: 10,
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should handle sorting parameters", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            sortby: "Datum",
            sortorder: "DESC",
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          sortby: "Datum",
          sortorder: "DESC",
        }),
      });

      expect(result).toHaveLength(1);
    });
  });

  describe("Additional fields", () => {
    it("should handle fullmail parameter", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            fullmail: true,
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          fullmail: true,
        }),
      });

      expect(result).toHaveLength(1);
    });

    it("should handle tracking parameter", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {
            tracking: true,
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          tracking: true,
        }),
      });

      expect(result).toHaveLength(1);
    });
  });

  describe("Complex scenarios", () => {
    it("should handle complete request with all parameters", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [
            "Objekt_nr",
            "Aktionsart",
            "Aktionstyp",
            "Bemerkung",
            "Datum",
          ];
        }
        if (paramName === "additionalFields") {
          return {
            addressid: "6795",
            estateid: "123",
            projectid: 999,
            filter: {
              Aktionsart: [{ op: "=", val: "Download" }],
            },
            sortby: "Datum",
            sortorder: "DESC",
            listlimit: 20,
            listoffset: 0,
            fullmail: false,
            tracking: false,
          };
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          addressid: [6795],
          estateid: [123],
          projectid: 999,
          data: ["Objekt_nr", "Aktionsart", "Aktionstyp", "Bemerkung", "Datum"],
          filter: {
            Aktionsart: [{ op: "=", val: "Download" }],
          },
          sortby: "Datum",
          sortorder: "DESC",
          listlimit: 20,
          listoffset: 0,
          fullmail: false,
          tracking: false,
        }),
      });

      expect(result).toHaveLength(1);
      expect(result[0].json).toHaveProperty("meta");
      expect(result[0].json).toHaveProperty("records");
    });

    it("should handle minimal request with no optional parameters", async () => {
      const mockGetNodeParameter = mockExecuteFunctions
        .getNodeParameter as jest.Mock;

      mockGetNodeParameter.mockImplementation((paramName: string) => {
        if (paramName === "parameters") {
          return [];
        }
        if (paramName === "additionalFields") {
          return {};
        }
        return undefined;
      });

      (apiRequest as jest.Mock).mockResolvedValue(agentslogSuccessResponse);

      const result = await readAgentslog.call(mockExecuteFunctions, 0);

      expect(apiRequest).toHaveBeenCalledWith({
        resourceType: "agentslog",
        operation: "read",
        parameters: expect.objectContaining({
          data: [],
        }),
      });

      expect(result).toHaveLength(1);
      expect(result[0].json).toHaveProperty("meta");
      expect(result[0].json).toHaveProperty("records");
    });
  });
});

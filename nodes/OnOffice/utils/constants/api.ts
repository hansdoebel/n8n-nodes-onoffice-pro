export const API_URL = "https://api.onoffice.de/api/stable/api.php";

export const API_CONFIG = {
  URL: API_URL,
  HMAC_VERSION: 2,
  DEFAULT_TIMEOUT: 30000,
  MAX_LIST_LIMIT: 500,
} as const;

export const OPERATIONS = {
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  MODIFY: "modify",
  DELETE: "delete",
  GET: "get",
  DO: "do",
} as const;

export const COMMON_LIST_FIELDS = [
  "listlimit",
  "listoffset",
  "sortby",
  "sortorder",
] as const;

export const SORT_ORDERS = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

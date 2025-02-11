export interface ApiResponseI<T> {
  succeeded: boolean;
  message: string;
  error: string;
  validationErrors: {
    [key: string]: string[];
  };
  data: T;
}

type ParamsType = { body: {} } | { query: {} } | { body: {}; query: {} } | undefined;

export interface EndpointInfoI<T, Q extends ParamsType = undefined> {
  endpoint: string;
  // queryParams: Q;
  requestMethod: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  endpointType: "RT" | "DT";
  schemaType: T;
  schema?: string | null;
  fetch?: (params: Q) => T;
}

export interface PaginatedData<T> {
  items: T;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
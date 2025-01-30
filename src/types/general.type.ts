export interface ApiResponseI<T> {
    succeeded: boolean;
    message: string;
    error: string;
    validationErrors: {
      [key: string]: string[];
    };
    data: {
      items: T;
      pageNumber: number;
      pageSize: number;
      totalCount: number;
      totalPages: number;
    };
  }

export interface EndpointInfoI<T> {
    endpoint: string;
    queryParams: Record<string, string>;
    requestMethod: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    endpointType: "RT" | "DT",
    schemaType: T,
    schema?:string | null,
    fetch?:()=> T
}


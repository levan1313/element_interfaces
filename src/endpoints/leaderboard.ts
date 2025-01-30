import { EndpointInfoI } from "../types/general.type";
import { LeaderboardProgressT } from "../types/leaderboard.type";

export const leaderboardPr1ogress: EndpointInfoI<LeaderboardProgressT> = {
  endpoint: "/api/v1/LeaderboardProgress/GetLeaderboardProgress",
  queryParams: {
    LeaderboardRecordId: "string",
    PageNumber: "number",
    PageSize: "number",
  },
  requestMethod: "GET",
  schemaType: <LeaderboardProgressT>{},
  endpointType: "RT",
  // @jsonSchema(LeaderboardProgressT)
  schema: `{"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"LeaderBoardProgressI":{"properties":{"amount":{"type":"number"},"coinId":{"type":"string"},"leaderboardRecordId":{"type":"number"},"placement":{"type":"number"},"playerId":{"type":"number"},"playerUsername":{"type":"string"},"prizeAmount":{"type":"number"}},"type":"object"}},"properties":{"data":{"properties":{"items":{"items":{"$ref":"#/definitions/LeaderBoardProgressI"},"type":"array"},"pageNumber":{"type":"number"},"pageSize":{"type":"number"},"totalCount":{"type":"number"},"totalPages":{"type":"number"}},"type":"object"},"error":{"type":"string"},"message":{"type":"string"},"succeeded":{"type":"boolean"},"validationErrors":{"additionalProperties":{"items":{"type":"string"},"type":"array"},"type":"object"}},"type":"object"}`,
};

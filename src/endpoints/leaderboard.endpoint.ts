import { EndpointInfoI } from "../types/general.type";
import {
  LeaderboardProgressResponseT,
  LeaderboardsListResponseT,
} from "../types/leaderboard.type";

export type LeaderboardQueryParams = {
  LeaderboardRecordId: string;
  PageNumber: number;
  PageSize: number;
};
export const leaderboardProgress: EndpointInfoI<
  LeaderboardProgressResponseT,
  { query: { id: number } }
> = {
  endpoint: "/api/v1/LeaderboardProgress/GetLeaderboardProgress",
  requestMethod: "GET",
  schemaType: <LeaderboardProgressResponseT>{},
  endpointType: "RT",
  // @jsonSchema(LeaderboardProgressResponseT)
schema:  `{"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"LeaderBoardProgressDataI":{"properties":{"amount":{"type":"number"},"coinId":{"type":"string"},"leaderboardRecordId":{"type":"number"},"placement":{"type":"number"},"playerId":{"type":"number"},"playerUsername":{"type":"string"},"prizeAmount":{"type":"number"}},"type":"object"}},"properties":{"data":{"items":{"$ref":"#/definitions/LeaderBoardProgressDataI"},"type":"array"},"error":{"type":"string"},"message":{"type":"string"},"succeeded":{"type":"boolean"},"validationErrors":{"additionalProperties":{"items":{"type":"string"},"type":"array"},"type":"object"}},"type":"object"}`,
};

export const leaderboardsList: EndpointInfoI<LeaderboardsListResponseT> = {
  endpoint: "/api/Promotion/GetPromotionLeaderboards/:id",
  requestMethod: "GET",
  schemaType: <LeaderboardsListResponseT>{},
  endpointType: "DT",
  // @jsonSchema(LeaderboardsListT)
schema:  `undefined`,
};

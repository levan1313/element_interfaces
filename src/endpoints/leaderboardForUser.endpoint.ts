import { LeaderboardProgressForUserDataI, LeaderboardProgressForUserResponseT } from "types/leaderboardForUser.type";
import { EndpointInfoI } from "../types/general.type";
import {
  LeaderBoardProgressDataI,
  LeaderboardProgressResponseT,
} from "../types/leaderboard.type";

export type LeaderboardQueryParams = {
    ExternalId: string;
  PageNumber: number;
  PageSize: number;
};
export const leaderboardProgress: EndpointInfoI<
  LeaderboardProgressForUserResponseT,
  { query: { ExternalId: LeaderboardProgressForUserDataI["data"]["items"][number]["externalId"] } }
> = {
  endpoint: "/LeaderboardApi/LeaderboardProgress/GetLeaderboardProgressForUser",
  requestMethod: "GET",
  schemaType: <LeaderboardProgressForUserResponseT>{},
  endpointType: "RT",
  // @jsonSchema(LeaderboardProgressResponseT)
schema:  `{"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"LeaderBoardProgressDataI":{"properties":{"amount":{"type":"number"},"coinId":{"type":"string"},"leaderboardRecordId":{"type":"number"},"placement":{"type":"number"},"playerId":{"type":"number"},"playerUsername":{"type":"string"},"prizeAmount":{"type":"number"}},"type":"object"}},"properties":{"data":{"items":{"$ref":"#/definitions/LeaderBoardProgressDataI"},"type":"array"},"error":{"type":"string"},"message":{"type":"string"},"succeeded":{"type":"boolean"},"validationErrors":{"additionalProperties":{"items":{"type":"string"},"type":"array"},"type":"object"}},"type":"object"}`,
};
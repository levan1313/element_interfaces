import { ApiResponseI } from "./general.type";

export interface LeaderBoardProgressI{
  leaderboardRecordId: number;
  playerId: number;
  playerUsername: string;
  amount: number;
  placement: number;
  coinId: string;
  prizeAmount: number;
}

export type LeaderboardProgressT = ApiResponseI<LeaderBoardProgressI[]>
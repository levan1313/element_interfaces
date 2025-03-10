import { ApiResponseI, PaginatedData } from "./general.type";

// leaderboard progress this data contains players of ongoing promotion

export interface LeaderBoardProgressDataI {
  leaderboardRecordId: number;
  playerId: number;
  playerUsername: string;
  amount: number;
  placement: number;
  coinId: string;
  prizeAmount: number;
  externalId: number;
}

export interface LeaderboardProgressResponseI {
  items: PaginatedData<LeaderBoardProgressDataI>;
}

export type LeaderboardProgressResponseT = ApiResponseI<
  LeaderBoardProgressDataI[]
>;

// it contains all the leaderboards in ongoing promotion

interface LeaderboardsListItemI {
  id: number;
  title: string;
  place: number;
  reapeatType: number;
  startDate: string;
  endDate: string;
}

interface PrizeI {
  prize: string;
  count: number;
}

export interface LeaderboardsListDataI {
  leaderboards: PaginatedData<LeaderboardsListItemI> & {
    sortableFields: ["Id", "Name", "Status"];
  };
  prizes: PrizeI[];
}

export type LeaderboardsListResponseT = ApiResponseI<LeaderboardsListDataI[]>;

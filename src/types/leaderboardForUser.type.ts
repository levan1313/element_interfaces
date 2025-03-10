import { ApiResponseI, PaginatedData, PaginationMeta } from "./general.type";
import { LeaderBoardProgressDataI } from "./leaderboard.type";

// leaderboard progress this data contains players of ongoing promotion

export interface LeaderboardProgressForUserDataI {
  data: {
    items: LeaderBoardProgressDataI[];
    currentUser: LeaderBoardProgressDataI;
  } & PaginationMeta
}

export type LeaderboardProgressForUserResponseT =
  ApiResponseI<LeaderboardProgressForUserDataI>;

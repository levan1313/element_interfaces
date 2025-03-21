import { leaderboardProgress } from "./endpoints/leaderboard.endpoint";
import { generateDummyData } from "./generateDummyData";
import { EndpointInfoI } from "./types/general.type";
import { LeaderboardProgressResponseT } from "./types/leaderboard.type";
import { balancesList } from "./endpoints/balance.endpoint";
import { promotion } from "./endpoints/promotion.endpoint";
import { BalancesListResponseI } from "./types/balance.type";
import { PromotionResponseT } from "./types/promotion.type";
import { leaderboardProgressForUser } from "./endpoints/leaderboardForUser.endpoint";
import { LeaderboardProgressForUserResponseT } from "./types/leaderboardForUser.type";

export {
  balancesList,
  leaderboardProgress,
  generateDummyData,
  promotion,
  leaderboardProgressForUser,
};
export type {
  EndpointInfoI,
  BalancesListResponseI,
  LeaderboardProgressResponseT,
  PromotionResponseT,
  LeaderboardProgressForUserResponseT
};

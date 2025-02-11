export type PromotionResponseT = {
    success: boolean;
    errors: ApiErrorI[];
    data: PromotionDataI;
  }
  
  export interface ApiErrorI {
    code: number;
    message: string;
  }
  
  export interface PromotionDataI {
    id: number;
    title: string;
    description: string;
    status: number;
    startDate: string; // ISO date string
    endDate: string;   // ISO date string
    createDate: string; // ISO date string
    segments: string[];
    promotionCoins: PromotionCoinI[];
    leaderboards: LeaderboardI[];
    games: GameI[];
  }
  
  export interface PromotionCoinI {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    coinType: number;
    isDeleted: boolean;
  }
  
  export interface LeaderboardI {
    id: number;
    title: string;
    description: string;
    eventType: number;
    creationDate: string;      // ISO date string
    announcementDate: string;  // ISO date string
    startDate: string;         // ISO date string
    endDate: string;           // ISO date string
    status: number;
    isGenerated: boolean;
    prizes: PrizeI[];
  }
  
  export interface PrizeI {
    id: number;
    startRank: number;
    endRank: number;
    coinId: string;
    amount: number;
  }
  
  export interface GameI {
    name: string;
    url: string;
  }
  
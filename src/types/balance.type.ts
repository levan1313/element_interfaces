export interface Balance {
    id: number;
    amount: number;
    coin: string;
    promotionId: number;
  }
  
  export interface BalancesListResponseI {
    balances: Balance[];
    playerId: number;
  }
  
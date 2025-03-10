import { BalancesListResponseI } from "types/balance.type";
import { EndpointInfoI } from "types/general.type";


export const balancesList: EndpointInfoI<
  BalancesListResponseI,
  { query: { propmotionId: number } }
> = {
  endpoint: "/HubApi/Hub/PlayerBalances",
  requestMethod: "GET",
  schemaType: <BalancesListResponseI>{},
  endpointType: "RT",
  // @jsonSchema(BalancesListResponseI)
schema:   `{"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"Balance":{"properties":{"amount":{"type":"number"},"coin":{"type":"string"},"id":{"type":"number"},"promotionId":{"type":"number"}},"type":"object"}},"properties":{"balances":{"items":{"$ref":"#/definitions/Balance"},"type":"array"},"playerId":{"type":"number"}},"type":"object"}`,
};

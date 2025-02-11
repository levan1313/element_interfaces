import { EndpointInfoI } from "types/general.type";
import { PromotionResponseT } from "types/promotion.type";

export const promotion: EndpointInfoI<PromotionResponseT, {query: {id: number}}> = {
  endpoint: "/api/Promotion/GetPromotionForBuilder",
  requestMethod: "GET",
  schemaType: <PromotionResponseT>{},
  endpointType: "DT",
  // @jsonSchema(PromotionResponseT)
schema:  `{"$schema":"http://json-schema.org/draft-07/schema#","definitions":{"ApiErrorI":{"properties":{"code":{"type":"number"},"message":{"type":"string"}},"type":"object"},"GameI":{"properties":{"name":{"type":"string"},"url":{"type":"string"}},"type":"object"},"LeaderboardI":{"properties":{"announcementDate":{"type":"string"},"creationDate":{"type":"string"},"description":{"type":"string"},"endDate":{"type":"string"},"eventType":{"type":"number"},"id":{"type":"number"},"isGenerated":{"type":"boolean"},"prizes":{"items":{"$ref":"#/definitions/PrizeI"},"type":"array"},"startDate":{"type":"string"},"status":{"type":"number"},"title":{"type":"string"}},"type":"object"},"PrizeI":{"properties":{"amount":{"type":"number"},"coinId":{"type":"string"},"endRank":{"type":"number"},"id":{"type":"number"},"startRank":{"type":"number"}},"type":"object"},"PromotionCoinI":{"properties":{"coinType":{"type":"number"},"description":{"type":"string"},"id":{"type":"string"},"imageUrl":{"type":"string"},"isDeleted":{"type":"boolean"},"name":{"type":"string"}},"type":"object"},"PromotionDataI":{"properties":{"createDate":{"type":"string"},"description":{"type":"string"},"endDate":{"type":"string"},"games":{"items":{"$ref":"#/definitions/GameI"},"type":"array"},"id":{"type":"number"},"leaderboards":{"items":{"$ref":"#/definitions/LeaderboardI"},"type":"array"},"promotionCoins":{"items":{"$ref":"#/definitions/PromotionCoinI"},"type":"array"},"segments":{"items":{"type":"string"},"type":"array"},"startDate":{"type":"string"},"status":{"type":"number"},"title":{"type":"string"}},"type":"object"}},"properties":{"data":{"$ref":"#/definitions/PromotionDataI"},"errors":{"items":{"$ref":"#/definitions/ApiErrorI"},"type":"array"},"success":{"type":"boolean"}},"type":"object"}`,
}

promotion.fetch?.({query :{id:12}});
export const ApiTagsEnum = {
  Spells: "Spells",
  TalentFeat: "Talents & Feats",
} as const;

export const RoutePathPrefixEnum = {
  spells: "spells",
  talentFeat: "talent-feat",
} as const;

export const API_KEY_HEADER = "api-key" as const;

export type RoutePathPrefixType =
  (typeof RoutePathPrefixEnum)[keyof typeof RoutePathPrefixEnum];

export const ThrottlingConfigEnum = {
  ttl: 1000,
  limit: 5,
} as const;

export const safeContentForRegExp = /^[A-Za-z0-9À-ÿ'"\s]+$/;

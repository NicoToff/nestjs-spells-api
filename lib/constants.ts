export const ApiTagsEnum = {
  Spells: "Spells",
} as const;

export const RoutePathPrefixEnum = {
  spells: "spells",
} as const;

export type RoutePathPrefixType =
  (typeof RoutePathPrefixEnum)[keyof typeof RoutePathPrefixEnum];

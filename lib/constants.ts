export const ApiTagsEnum = {
  Spells: "Spells",
  SpellRelationDetails: "Spell relation details",
} as const;

export const RoutePathPrefixEnum = {
  spells: "spells",
  schools: "schools",
  sources: "sources",
  groups: "groups",
} as const;

export type RoutePathPrefixType =
  (typeof RoutePathPrefixEnum)[keyof typeof RoutePathPrefixEnum];

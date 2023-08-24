export const SOURCES = [
  "Primal",
  "Arcane",
  "Divine",
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
  "Artificer",
] as const;
export type SourceName = (typeof SOURCES)[number];
export const isSourceName = (value: unknown): value is SourceName => {
  return SOURCES.includes(value as SourceName);
};

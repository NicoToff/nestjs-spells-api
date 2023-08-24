export const SPELL_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type SpellLevel = (typeof SPELL_LEVELS)[number];
export const isSpellLevel = (value: unknown): value is SpellLevel => {
  return SPELL_LEVELS.includes(value as SpellLevel);
};

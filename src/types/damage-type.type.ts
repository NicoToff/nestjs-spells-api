export const DAMAGE_TYPES = [
  "bludgeoning",
  "piercing",
  "slashing",
  "acid",
  "cold",
  "fire",
  "force",
  "lightning",
  "necrotic",
  "poison",
  "psychic",
  "radiant",
  "thunder",
] as const;
export type DamageType = (typeof DAMAGE_TYPES)[number];
export const isDamageType = (value: unknown): value is DamageType => {
  return DAMAGE_TYPES.includes(value as DamageType);
};

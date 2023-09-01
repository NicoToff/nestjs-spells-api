export const SCHOOLS = [
  "Abjuration",
  "Conjuration",
  "Divination",
  "Enchantment",
  "Evocation",
  "Illusion",
  "Necromancy",
  "Transmutation",
] as const;
export type SchoolName = (typeof SCHOOLS)[number];
export const isSchoolName = (value: unknown): value is SchoolName => {
  return SCHOOLS.includes(value as SchoolName);
};

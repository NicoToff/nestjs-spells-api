import type {
  SpellLevel,
  DamageType,
  ComponentName,
  SchoolName,
  AbilityScore,
  SpellTag,
} from "dnd-home-utils";

export interface ISpellBase {
  name: string;
  level: SpellLevel;
  school: SchoolName;
  castingTime: string;
  range: string;
  area?: string;
  duration: string;
  components: ComponentName[];
  material?: string;
  concentration?: boolean;
  ritual?: boolean;
  atHigherLevels?: string;
  cantripUpgrade?: string;
  flavor?: string;
  description: [string, ...string[]];
  damageTypes?: DamageType[];
  savingThrow?: AbilityScore;
  tags?: SpellTag[];
}

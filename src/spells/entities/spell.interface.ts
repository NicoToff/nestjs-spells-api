import type {
  SpellLevel,
  DamageType,
  ComponentName,
  SchoolName,
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
  description: string[];
  damageTypes?: DamageType[];
}

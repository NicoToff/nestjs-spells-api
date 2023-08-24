import { SpellLevel } from "./spell.type";

export interface ISpellBase {
  name: string;
  level: SpellLevel;
  castingTime: string;
  range: string;
  area?: string;
  duration: string;
  components: string;
  concentration?: boolean;
  ritual?: boolean;
  atHigherLevels?: string;
  cantripUpgrade?: string;
  flavor?: string;
  description: string;
}

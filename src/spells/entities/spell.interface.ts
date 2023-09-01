import { SpellLevel } from "../../types/level.type";

export interface ISpellBase {
  name: string;
  level: SpellLevel;
  castingTime: string;
  range: string;
  area?: string;
  duration: string;
  components: string[];
  material?: string;
  concentration?: boolean;
  ritual?: boolean;
  atHigherLevels?: string;
  cantripUpgrade?: string;
  flavor?: string;
  description: string[];
}

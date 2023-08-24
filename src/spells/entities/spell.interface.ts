export interface ISpellBase {
  name: string;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
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

export interface ISpellBase {
  name: string;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  castingTime: string;
  range: string;
  area: string | null | undefined;
  duration: string;
  components: string;
  concentration: boolean | null | undefined;
  ritual: boolean | null | undefined;
  atHigherLevels: string | null | undefined;
  cantripUpgrade: string | null | undefined;
  flavor: string | null | undefined;
  description: string;
}

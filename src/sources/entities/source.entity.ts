import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { Spell } from "../../spells/entities/spell.entity";
import { slugify } from "lib/slugify";

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
export type SourceType = (typeof SOURCES)[number];
export const isSourceType = (value: unknown): value is SourceType => {
  return SOURCES.includes(value as SourceType);
};

@Entity()
export class Source {
  @PrimaryColumn()
  slug: string;

  @Column()
  name: SourceType;

  @ManyToMany(() => Spell, (spell) => spell.sources)
  spell: Spell[];

  constructor(data?: unknown) {
    if (!data) return;
    if (!isSourceType(data)) {
      throw new Error(`${data} is not a valid source type`);
    }
    this.slug = slugify(data);
    this.name = data;
  }
}

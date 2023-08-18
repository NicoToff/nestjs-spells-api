import { ApiProperty } from "@nestjs/swagger";
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
  @ApiProperty()
  @PrimaryColumn()
  slug: string;

  @ApiProperty()
  @Column()
  name: SourceType;

  @ManyToMany(() => Spell, (spell) => spell.sources)
  spell: Spell[];

  constructor(data?: SourceType) {
    if (!data) return;
    this.slug = slugify(data);
    this.name = data;
  }
}

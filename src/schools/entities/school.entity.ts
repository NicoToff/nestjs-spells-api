import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Spell } from "../../spells/entities/spell.entity";
import { slugify } from "lib/slugify";

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
export type SchoolType = (typeof SCHOOLS)[number];
export const isSchoolType = (value: unknown): value is SchoolType => {
  return SCHOOLS.includes(value as SchoolType);
};

@Entity()
export class School {
  @ApiProperty()
  @PrimaryColumn()
  slug: string;

  @ApiProperty()
  @Column()
  name: SchoolType;

  @OneToMany(() => Spell, (spell) => spell.school)
  spell: Spell[];

  constructor(data?: SchoolType) {
    if (!data) return;
    this.slug = slugify(data);
    this.name = data;
  }
}

import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Spell } from "../../spells/entities/spell.entity";
import { slugify } from "../../../lib/slugify";
import { ISchoolBase } from "./school.interface";
import { SchoolName } from "./school.type";

@Entity()
export class School implements ISchoolBase {
  @ApiProperty()
  @PrimaryColumn()
  slug: string;

  @ApiProperty()
  @Column()
  name: SchoolName;

  @OneToMany(() => Spell, (spell) => spell.school)
  spell: Spell[];

  constructor(data?: SchoolName) {
    if (!data) return;
    this.slug = slugify(data);
    this.name = data;
  }
}

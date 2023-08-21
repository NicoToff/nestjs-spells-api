import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Spell } from "../../spells/entities/spell.entity";
import { slugify } from "../../../lib/slugify";
import type { GroupName } from "./group.type";

@Entity()
export class Group {
  @ApiProperty()
  @PrimaryColumn()
  slug: string;

  @ApiProperty()
  @Column()
  name: GroupName;

  @OneToMany(() => Spell, (spell) => spell.group)
  spell: Spell[];

  constructor(data?: GroupName) {
    if (!data) return;
    this.slug = slugify(data);
    this.name = data;
  }
}

import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { Spell } from "../../spells/entities/spell.entity";
import { slugify } from "../../../lib/slugify";
import { ISourcebase } from "./source.interface";
import type { SourceName } from "./source.type";

@Entity()
export class Source implements ISourcebase {
  @ApiProperty()
  @PrimaryColumn()
  slug: string;

  @ApiProperty()
  @Column()
  name: SourceName;

  @ManyToMany(() => Spell, (spell) => spell.sources)
  spell: Spell[];

  constructor(data?: SourceName) {
    if (!data) return;
    this.slug = slugify(data);
    this.name = data;
  }
}

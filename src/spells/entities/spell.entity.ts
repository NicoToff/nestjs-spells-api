import { ApiProperty } from "@nestjs/swagger";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";

import { ISpellBase } from "./spell.interface";

import { Source } from "../../sources/entities/source.entity";
import { School } from "../../schools/entities/school.entity";
import { Group } from "../../groups/entities/group.entity";

import { slugify } from "../../../lib/slugify";

@Entity()
export class Spell implements ISpellBase {
  @ApiProperty()
  @PrimaryColumn()
  slug: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

  @ApiProperty()
  @Column()
  castingTime: string;

  @ApiProperty()
  @Column()
  range: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  area?: string;

  @ApiProperty()
  @Column()
  duration: string;

  @ApiProperty()
  @Column({ default: "" })
  components: string;

  @ApiProperty({ required: false })
  @Column({ default: false })
  concentration?: boolean;

  @ApiProperty({ required: false })
  @Column({ default: false })
  ritual?: boolean;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  flavor?: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  atHigherLevels?: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  cantripUpgrade?: string;

  @ApiProperty({ type: () => School })
  @ManyToOne(() => School, (school) => school.spell)
  school: School;

  @ApiProperty({ type: () => Group, required: false })
  @ManyToOne(() => Group, (group) => group.spell, { nullable: true })
  group?: Group;

  @ApiProperty({ type: () => Source, isArray: true })
  @ManyToMany(() => Source, (source) => source.spell)
  @JoinTable()
  sources: Source[];

  static readonly spellRelationColumnNames = [
    "school",
    "sources",
    "group",
  ] satisfies SpellRelationColumnName[];

  constructor(data?: Omit<Spell, "slug" | "spellRelationColumnNames">) {
    if (!data) return;
    this.slug = slugify(data.name);
    this.name = data.name;
    this.level = data.level;
    this.castingTime = data.castingTime;
    this.range = data.range;
    this.area = data.area;
    this.duration = data.duration;
    this.components = data.components;
    this.concentration = data.concentration;
    this.ritual = data.ritual;
    this.description = data.description;
    this.flavor = data.flavor;
    this.atHigherLevels = data.atHigherLevels;
    this.cantripUpgrade = data.cantripUpgrade;
  }
}

type SpellRelationColumnName = keyof Pick<
  typeof Spell.prototype,
  "school" | "sources" | "group"
>;

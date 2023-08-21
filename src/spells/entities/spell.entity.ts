import { ApiProperty } from "@nestjs/swagger";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Source } from "../../sources/entities/source.entity";
import type { SourceName } from "../../sources/entities/source.type";
import { School } from "../../schools/entities/school.entity";
import {
  isSchoolName,
  type SchoolName,
} from "../../schools/entities/school.type";
import { Group } from "../../groups/entities/group.entity";
import { isGroupName, type GroupName } from "../../groups/entities/group.type";
import { slugify } from "../../../lib/slugify";
import { ISpellBase } from "./spell.interface";

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
  area: string | null | undefined;

  @ApiProperty()
  @Column()
  duration: string;

  @ApiProperty()
  @Column({ default: "" })
  components: string;

  @ApiProperty({ required: false })
  @Column({ default: false })
  concentration: boolean | null | undefined;

  @ApiProperty({ required: false })
  @Column({ default: false })
  ritual: boolean | null | undefined;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  flavor: string | null | undefined;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  atHigherLevels: string | null | undefined;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  cantripUpgrade: string | null | undefined;

  @ApiProperty({ type: () => School })
  @ManyToOne(() => School, (school) => school.spell)
  school: School;

  @ApiProperty({ type: () => Group, required: false })
  @ManyToOne(() => Group, (group) => group.spell, { nullable: true })
  group: Group | null | undefined;

  @ApiProperty({ type: () => Source, isArray: true })
  @ManyToMany(() => Source, (source) => source.spell)
  @JoinTable()
  sources: Source[];

  constructor(data?: SpellDataType) {
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

/** Valid typing to create new Spell objects. */
export type SpellRelation = keyof Pick<
  typeof Spell.prototype,
  "school" | "sources" | "group"
>;
export type SpellDataType = Omit<Spell, "slug" | SpellRelation> & {
  school: SchoolName;
  group?: GroupName;
  sources: SourceName[];
};
export function isSpellDataType(obj: unknown): obj is SpellDataType {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as SpellDataType).name === "string" &&
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes((obj as SpellDataType).level) &&
    isSchoolName((obj as SpellDataType).school) &&
    ((obj as SpellDataType).group == null ||
      isGroupName((obj as SpellDataType).group)) &&
    typeof (obj as SpellDataType).castingTime === "string" &&
    typeof (obj as SpellDataType).range === "string" &&
    (typeof (obj as SpellDataType).area === "string" ||
      (obj as SpellDataType).area == null) &&
    typeof (obj as SpellDataType).duration === "string" &&
    typeof (obj as SpellDataType).components === "string" &&
    (typeof (obj as SpellDataType).concentration === "boolean" ||
      (obj as SpellDataType).concentration == null) &&
    (typeof (obj as SpellDataType).ritual === "boolean" ||
      (obj as SpellDataType).ritual == null) &&
    typeof (obj as SpellDataType).description === "string" &&
    Array.isArray((obj as SpellDataType).sources) &&
    (obj as SpellDataType).sources.every((source) => typeof source === "string")
  );
}

import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Source, type SourceType } from "../../sources/entities/source.entity";
import { School, type SchoolType } from "../../schools/entities/school.entity";
import { Group, type GroupType } from "../../groups/entities/group.entity";
import { slugify } from "../../../lib/slugify";

@Entity()
export class Spell {
  @PrimaryColumn()
  slug: string;

  @Column()
  name: string;

  @Column()
  level: number;

  @ManyToOne(() => School, (school) => school.spell)
  school: School;

  @ManyToOne(() => Group, (group) => group.spell, { nullable: true })
  group?: Group;

  @Column()
  castingTime: string;

  @Column()
  range: string;

  @Column({ nullable: true })
  area?: string;

  @Column()
  duration: string;

  @Column({ default: "" })
  components: string;

  @Column({ default: false })
  concentration?: boolean;

  @Column({ default: false })
  ritual?: boolean;

  @Column({ nullable: true })
  flavor?: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  atHigherLevels?: string;

  @Column({ nullable: true })
  cantripUpgrade?: string;

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
  school: SchoolType;
  group?: GroupType;
  sources: SourceType[];
};

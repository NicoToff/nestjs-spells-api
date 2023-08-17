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
import { slugify } from "../../../lib/slugify";

@Entity()
export class Spell {
  @PrimaryColumn()
  slug: string;
  /** The spell's full name. */
  @Column()
  name: string;
  /** The spell's level. A cantrip level is 0. */
  @Column()
  level: number;
  /** (Relation) The school of the spell. */
  @ManyToOne(() => School, (school) => school.spell)
  school: School;

  @Column()
  castingTime: string;

  @Column()
  range: string;

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
    this.duration = data.duration;
    this.components = data.components;
    this.concentration = data.concentration;
    this.ritual = data.ritual;
    this.description = data.description;
    this.flavor = data.flavor;
    this.atHigherLevels = data.atHigherLevels;
  }
}

/** Valid typing to create new Spell objects. */
export type SpellRelation = keyof Pick<
  typeof Spell.prototype,
  "school" | "sources"
>;
export type SpellDataType = Omit<Spell, "slug" | SpellRelation> & {
  school: SchoolType;
  sources: SourceType[];
};

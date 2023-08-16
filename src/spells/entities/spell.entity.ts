import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Source, type SourceType } from "../../sources/entities/source.entity";
import { slugify } from "../../../lib/slugify";

@Entity()
export class Spell {
  @PrimaryColumn()
  slug: string;

  @Column()
  name: string;

  @Column()
  level: number;

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
    this.description = data.description;
    this.flavor = data.flavor;
    this.atHigherLevels = data.atHigherLevels;
  }

  // @Column({ nullable: true })
  // school: string;

  // @Column({ nullable: true })
  // castingTime: string;

  // @Column({ nullable: true })
  // range: string;

  // @Column({ nullable: true })
  // duration: string;

  // @Column({ default: false })
  // concentration: boolean;

  // @Column({ default: false })
  // ritual: boolean;

  // @Column({ nullable: true })
  // components: string;

  // @Column({ nullable: true })
  // classes: string;

  // @Column({ nullable: true })
  // subclasses: string;
}

/** Valid typing to create new Spell objects. */
export type SpellDataType = Omit<Spell, "slug" | "sources"> & {
  sources: SourceType[];
};

import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Source } from "../../sources/entities/source.entity";
import { slugify } from "../../../lib/slugify";
import { SpellDataType } from "lib/spell-data";

@Entity()
export class Spell {
  @PrimaryColumn()
  slug: string;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  description: string;

  @ManyToMany(() => Source, (source) => source.spell)
  @JoinTable()
  sources: Source[];

  constructor(data?: SpellDataType) {
    if (!data) return;
    this.slug = slugify(data.name);
    this.name = data.name;
    this.level = data.level;
    this.description = data.description;
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
  // atHigherLevels: string;

  // @Column({ nullable: true })
  // classes: string;

  // @Column({ nullable: true })
  // subclasses: string;
}

import { Entity, Column, PrimaryColumn } from "typeorm";

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

  // @Column({ nullable: true })
  // sources: string;

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

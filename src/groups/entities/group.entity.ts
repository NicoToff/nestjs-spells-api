import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Spell } from "../../spells/entities/spell.entity";
import { slugify } from "../../../lib/slugify";

export const GROUPS = ["Elemental Torrents"] as const;
export type GroupType = (typeof GROUPS)[number];
export const isGroupType = (value: unknown): value is GroupType => {
  return GROUPS.includes(value as GroupType);
};

@Entity()
export class Group {
  @PrimaryColumn()
  slug: string;

  @Column()
  name: GroupType;

  @OneToMany(() => Spell, (spell) => spell.group)
  spell: Spell[];

  constructor(data?: GroupType) {
    if (!data) return;
    this.slug = slugify(data);
    this.name = data;
  }
}

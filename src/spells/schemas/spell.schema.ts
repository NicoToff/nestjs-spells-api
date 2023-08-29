import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { ISpellBase } from "../entities/spell.interface";
import { SpellLevel } from "../entities/spell.type";

import { SchoolName } from "../../schools/entities/school.type";
import { GroupName } from "../../groups/entities/group.type";
import { SourceName } from "../../sources/entities/source.type";

@Schema()
export class Spell implements ISpellBase {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  level: SpellLevel;

  @Prop({ required: true })
  castingTime: string;

  @Prop({ required: true })
  range: string;

  @Prop()
  area?: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  components: string;

  @Prop({ default: false })
  concentration?: boolean;

  @Prop({ default: false })
  ritual?: boolean;

  @Prop()
  flavor?: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  atHigherLevels?: string;

  @Prop()
  cantripUpgrade?: string;

  @Prop({ required: true })
  school: SchoolName;

  @Prop()
  group?: GroupName;

  @Prop({ required: true })
  sources: SourceName[];
}

export type SpellDocument = HydratedDocument<Spell>;

export const SpellSchema = SchemaFactory.createForClass(Spell);

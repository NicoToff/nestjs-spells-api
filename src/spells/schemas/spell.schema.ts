import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

import { ISpellBase } from "../entities/spell.interface";
import { SPELL_LEVELS, SpellLevel } from "../../types/level.type";

import { SCHOOLS, SchoolName } from "../../types/school.type";
import { GROUPS } from "../../types/group.type";
import { SOURCES, SourceName } from "../../types/source.type";
import { COMPONENTS, ComponentName } from "../../types/component.type";
import { DAMAGE_TYPES, DamageType } from "../../types/damage-type.type";

@Schema({ versionKey: false })
export class Spell implements ISpellBase {
  @ApiProperty()
  @Prop({ required: true, unique: true })
  name: string;

  @ApiProperty({ enum: SPELL_LEVELS })
  @Prop({ required: true })
  level: SpellLevel;

  @ApiProperty()
  @Prop({ required: true })
  castingTime: string;

  @ApiProperty()
  @Prop({ required: true })
  range: string;

  @ApiProperty({ required: false })
  @Prop()
  area?: string;

  @ApiProperty()
  @Prop({ required: true })
  duration: string;

  @ApiProperty({ enum: COMPONENTS, isArray: true })
  @Prop({ required: true })
  components: ComponentName[];

  @ApiProperty({ required: false })
  @Prop()
  material?: string;

  @ApiProperty({ required: false })
  @Prop({ default: false })
  concentration?: boolean;

  @ApiProperty({ required: false })
  @Prop({ default: false })
  ritual?: boolean;

  @ApiProperty({ required: false })
  @Prop()
  flavor?: string;

  @ApiProperty({ isArray: true, type: String })
  @Prop({ required: true })
  description: string[];

  @ApiProperty({ enum: DAMAGE_TYPES, isArray: true })
  @Prop({ required: false })
  damageTypes?: DamageType[];

  @ApiProperty({ required: false })
  @Prop()
  atHigherLevels?: string;

  @ApiProperty({ required: false })
  @Prop()
  cantripUpgrade?: string;

  @ApiProperty({ enum: SCHOOLS })
  @Prop({ required: true })
  school: SchoolName;

  @ApiProperty({ enum: GROUPS, required: false })
  @Prop()
  group?: string;

  @ApiProperty({ enum: SOURCES, isArray: true })
  @Prop({ required: true })
  sources: SourceName[];
}

export type SpellDocument = HydratedDocument<Spell>;

export const SpellSchema = SchemaFactory.createForClass(Spell);

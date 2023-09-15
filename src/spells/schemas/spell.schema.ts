import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";

import { ISpellBase } from "../entities/spell.interface";

import {
  SPELL_LEVELS,
  SCHOOLS,
  GROUPS,
  SOURCES,
  COMPONENTS,
  DAMAGE_TYPES,
} from "dnd-home-utils";

import type {
  SpellLevel,
  SchoolName,
  SourceName,
  ComponentName,
  DamageType,
} from "dnd-home-utils";

@Schema({ versionKey: false })
export class Spell implements ISpellBase {
  @ApiProperty()
  @Prop({ required: true, unique: true, trim: true })
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

  // Hidden field from API
  @Prop({ required: false, default: false })
  isPrivate?: boolean;
}

export type SpellDocument = HydratedDocument<Spell>;

export const SpellSchema = SchemaFactory.createForClass(Spell);

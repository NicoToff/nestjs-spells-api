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
  SPELL_TAGS,
  ABILITY_SCORES,
} from "dnd-home-utils";

import type {
  SpellLevel,
  SchoolName,
  SourceName,
  ComponentName,
  DamageType,
  SpellTag,
  AbilityScore,
} from "dnd-home-utils";

@Schema({ versionKey: false })
export class Spell implements ISpellBase {
  @ApiProperty({ required: true })
  @Prop({ required: true, unique: true, trim: true })
  name: string;

  @ApiProperty({ enum: SPELL_LEVELS, required: true })
  @Prop({ required: true })
  level: SpellLevel;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  castingTime: string;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  range: string;

  @ApiProperty({ required: false })
  @Prop({ required: false })
  area?: string;

  @ApiProperty({ required: true })
  @Prop({ required: true })
  duration: string;

  @ApiProperty({ enum: COMPONENTS, isArray: true, required: true })
  @Prop({ required: true })
  components: ComponentName[];

  @ApiProperty({ required: false })
  @Prop({ required: false })
  material?: string;

  @ApiProperty({ required: false })
  @Prop({ default: false })
  concentration?: boolean;

  @ApiProperty({ required: false })
  @Prop({ default: false })
  ritual?: boolean;

  @ApiProperty({ required: false })
  @Prop({ required: false })
  flavor?: string;

  @ApiProperty({ isArray: true, type: String, required: true })
  @Prop({ required: true })
  description: string[];

  @ApiProperty({ enum: DAMAGE_TYPES, isArray: true, required: false })
  @Prop({ required: false })
  damageTypes?: DamageType[];

  @ApiProperty({ required: false })
  @Prop({ required: false })
  atHigherLevels?: string;

  @ApiProperty({ required: false })
  @Prop({ required: false })
  cantripUpgrade?: string;

  @ApiProperty({ enum: SCHOOLS, required: true })
  @Prop({ required: true })
  school: SchoolName;

  @ApiProperty({ enum: GROUPS, required: false })
  @Prop({ required: false })
  group?: string;

  @ApiProperty({ enum: SOURCES, isArray: true, required: true })
  @Prop({ required: true })
  sources: SourceName[];

  @ApiProperty({ enum: SPELL_TAGS, isArray: true, required: false })
  @Prop({ required: false })
  tags?: SpellTag[];

  @ApiProperty({ enum: ABILITY_SCORES, required: false })
  @Prop({ required: false })
  savingThrow?: AbilityScore;

  // Hidden field from API
  @Prop({ required: false, default: false })
  isPrivate?: boolean;
}

export type SpellDocument = HydratedDocument<Spell>;

export const SpellSchema = SchemaFactory.createForClass(Spell);

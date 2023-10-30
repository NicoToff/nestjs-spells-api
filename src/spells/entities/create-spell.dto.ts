import {
  IsNotEmpty,
  IsIn,
  IsArray,
  ArrayUnique,
  ArrayNotEmpty,
  IsOptional,
  IsBoolean,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { ISpellBase } from "./spell.interface";

import {
  SPELL_LEVELS,
  SCHOOLS,
  GROUPS,
  SOURCES,
  COMPONENTS,
  DAMAGE_TYPES,
  ABILITY_SCORES,
  SPELL_TAGS,
} from "dnd-home-utils";

import type {
  ComponentName,
  SpellLevel,
  SchoolName,
  GroupName,
  SourceName,
  DamageType,
  AbilityScore,
  SpellTag,
} from "dnd-home-utils";

export class CreateSpellDto implements ISpellBase {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  slug?: string; // Optional for TS because it's auto-generated in the seed script

  @ApiProperty({ enum: SPELL_LEVELS })
  @IsIn(SPELL_LEVELS, {
    message: `Level must be one of the following: ${SPELL_LEVELS.join(", ")}`,
  })
  level: SpellLevel;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  castingTime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  range: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  area?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  duration: string;

  @ApiProperty({ enum: COMPONENTS, isArray: true })
  @IsArray()
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsIn(COMPONENTS, {
    each: true,
    message: `Components must be one or more of the following: ${COMPONENTS.join(
      ", "
    )}`,
  })
  components: ComponentName[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  material?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  concentration?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  ritual?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  flavor?: string;

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  description: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  atHigherLevels?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  cantripUpgrade?: string;

  @ApiProperty({ enum: SCHOOLS })
  @IsIn(SCHOOLS, {
    message: `School must be one of the following: ${SCHOOLS.join(", ")}`,
  })
  school: SchoolName;

  @ApiProperty({ enum: GROUPS, required: false })
  @IsOptional()
  group?: GroupName | (string & {});

  @ApiProperty({ enum: SOURCES, isArray: true })
  @IsArray()
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsIn(SOURCES, {
    each: true,
    message: `Sources must be one or more of the following: ${SOURCES.join(
      ", "
    )}`,
  })
  sources: SourceName[];

  @ApiProperty({ required: false, isArray: true, enum: DAMAGE_TYPES })
  @IsOptional()
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsIn(DAMAGE_TYPES, {
    each: true,
    message: `Damage types must be one or more of the following: ${DAMAGE_TYPES.join(
      ", "
    )}`,
  })
  damageTypes?: DamageType[];

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isPrivate?: boolean;

  @ApiProperty({ required: false, enum: ABILITY_SCORES })
  @IsOptional()
  @IsIn(ABILITY_SCORES, {
    message: `Saving throw must match one of the ability scores: ${ABILITY_SCORES.join(
      ", "
    )}`,
  })
  savingThrow?: AbilityScore;

  @ApiProperty({ required: false, isArray: true, enum: SPELL_TAGS })
  @IsOptional()
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsIn(SPELL_TAGS, {
    each: true,
    message: `Spell tags must be one or more of the following: ${SPELL_TAGS.join(
      ", "
    )}`,
  })
  tags?: SpellTag[];
}

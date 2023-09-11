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
} from "dnd-home-utils";

import type {
  ComponentName,
  SpellLevel,
  SchoolName,
  GroupName,
  SourceName,
  DamageType,
} from "dnd-home-utils";

export class CreateSpellDto implements ISpellBase {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

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
  group?: GroupName;

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
}

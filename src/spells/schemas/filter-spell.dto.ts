import { BadRequestException } from "@nestjs/common";
import { IsOptional, IsString, IsBoolean, IsIn } from "class-validator";
import { Transform } from "class-transformer";

import { SPELL_LEVELS, SpellLevel } from "../../types/level.type";
import { COMPONENTS, ComponentName } from "../../types/component.type";
import { SchoolName } from "../../types/school.type";
import { GroupName } from "../../types/group.type";
import { SourceName } from "../../types/source.type";

export class FilterSpellDto {
  @IsOptional()
  @Transform(toSelfOrThrow)
  name?: string;

  @IsOptional()
  @Transform(toNumberOrThrow)
  @IsIn(SPELL_LEVELS)
  level?: SpellLevel;

  @IsOptional()
  @Transform(toSelfOrThrow)
  school?: SchoolName;

  @IsOptional()
  @Transform(toStringArrayOrThrow)
  @IsIn(COMPONENTS.map((c) => c.toLowerCase()), { each: true })
  components?: ComponentName[];

  @IsOptional()
  @Transform(toSelfOrThrow)
  group?: GroupName;

  @IsOptional()
  @Transform(toStringArrayOrThrow)
  @IsString({ each: true })
  sources?: SourceName[];

  @IsOptional()
  @Transform(toBooleanOrThrow)
  @IsBoolean()
  concentration?: boolean;

  @IsOptional()
  @Transform(toBooleanOrThrow)
  @IsBoolean()
  ritual?: boolean;
}

const onlySafeChars = /[A-Za-zÀ-ÿ'"`\s]/;

function createRegExpValidator(regExp: RegExp) {
  return (value: unknown) => {
    if (typeof value !== "string")
      throw new BadRequestException(`Invalid type: ${typeof value}`);
    if (!regExp.test(value))
      throw new BadRequestException(`Invalid chars in name: ${value}`);
    return value;
  };
}

const validateRegExpValue = createRegExpValidator(onlySafeChars);

function toSelfOrThrow({ value }: { value: unknown }) {
  if (typeof value === "string") {
    return validateRegExpValue(value);
  }
}

function toBooleanOrThrow({ value }: { value: unknown }) {
  console.log(`toBoolean:`, typeof value);
  if (typeof value === "string") {
    if (value === "true" || value === "") return true;
    if (value === "false") return false;
    throw new BadRequestException(`Invalid boolean: ${value}`);
  }
}

function toNumberOrThrow({ value }: { value: unknown }) {
  if (typeof value === "string") {
    const number = Number(value);
    if (isNaN(number))
      throw new BadRequestException(`Invalid number: ${value}`);
    return number;
  }
}

function toStringArrayOrThrow({ value }: { value: unknown }) {
  if (typeof value === "string") {
    const splitValues = value.split(",").filter(Boolean);
    splitValues.forEach(validateRegExpValue);
    return splitValues.map((v) => v.toLowerCase());
  }
}

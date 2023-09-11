import { BadRequestException } from "@nestjs/common";
import { IsOptional, IsString, IsBoolean, IsIn } from "class-validator";
import { Transform } from "class-transformer";

import { SPELL_LEVELS, type SpellLevel } from "../../types/level.type";
import { COMPONENTS, type ComponentName } from "../../types/component.type";
import type { SchoolName } from "../../types/school.type";
import type { GroupName } from "../../types/group.type";
import type { SourceName } from "../../types/source.type";
import type { DamageType } from "../../types/damage-type.type";

export class FilterSpellDto {
  @IsOptional()
  @Transform(toValidSelfOrThrow)
  name?: string;

  @IsOptional()
  @Transform(toNumberOrThrow)
  @IsIn(SPELL_LEVELS)
  level?: SpellLevel;

  @IsOptional()
  @Transform(toValidSelfOrThrow)
  school?: SchoolName;

  @IsOptional()
  @Transform(toValidStringArrayOrThrow)
  @IsIn(COMPONENTS.map((c) => c.toLowerCase()), { each: true })
  components?: ComponentName[];

  @IsOptional()
  @Transform(toValidSelfOrThrow)
  group?: GroupName;

  @IsOptional()
  @Transform(toValidStringArrayOrThrow)
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

  @IsOptional()
  @Transform(toValidStringArrayOrThrow)
  @IsString({ each: true })
  damageTypes?: DamageType[];
}

const onlySafeChars = /[A-Za-z0-9À-ÿ'"`\s+]/;

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

function toValidSelfOrThrow({ value }: { value: unknown }) {
  if (typeof value === "string") {
    return validateRegExpValue(value);
  }
}

function toBooleanOrThrow({ value }: { value: unknown }) {
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

function toValidStringArrayOrThrow({ value }: { value: unknown }) {
  if (Array.isArray(value)) {
    value.forEach(validateRegExpValue);
    return value.map((v) => v.toLowerCase());
  } else if (typeof value === "string") {
    return [validateRegExpValue(value)];
  }
}

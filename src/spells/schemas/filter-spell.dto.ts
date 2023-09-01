import { BadRequestException } from "@nestjs/common";
import { IsOptional, IsString, IsBoolean, IsIn } from "class-validator";
import { Transform } from "class-transformer";

import { SPELL_LEVELS, SpellLevel } from "../../types/level.type";
import { COMPONENTS, ComponentName } from "../../types/component.type";
import { SCHOOLS, SchoolName } from "../../types/school.type";
import { GROUPS, GroupName } from "../../types/group.type";
import { SourceName } from "../../types/source.type";

export class FilterSpellDto {
  @IsOptional()
  @Transform(({ value }) => validateRegExpValue(value))
  name?: string;

  @IsOptional()
  @IsIn(SPELL_LEVELS)
  level?: SpellLevel;

  @IsOptional()
  @IsIn(SCHOOLS)
  school?: SchoolName;

  @IsOptional()
  @Transform(toStringArray)
  @IsIn(COMPONENTS, { each: true })
  components?: ComponentName[];

  @IsOptional()
  @IsIn(GROUPS)
  group?: GroupName;

  @IsOptional()
  @Transform(toStringArray)
  @IsString({ each: true })
  sources?: SourceName[];

  @IsOptional()
  @Transform(toBoolean)
  @IsBoolean()
  concentration?: boolean;

  @IsOptional()
  @Transform(toBoolean)
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

function toBoolean({ value }: { value: unknown }) {
  console.log(`toBoolean:`, typeof value);
  if (typeof value === "string") {
    if (value === "true" || value === "") return true;
    if (value === "false") return false;
    throw new BadRequestException(`Invalid boolean: ${value}`);
  }
}

function toStringArray({ value }: { value: unknown }) {
  if (typeof value === "string") {
    const splitValues = value.split(",").filter(Boolean);
    splitValues.forEach(validateRegExpValue);
    return splitValues;
  }
}

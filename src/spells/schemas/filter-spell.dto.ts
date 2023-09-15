import { IsOptional, IsString, IsBoolean, IsIn } from "class-validator";
import { Transform } from "class-transformer";
import { SPELL_LEVELS, COMPONENTS } from "dnd-home-utils";

import type {
  SpellLevel,
  ComponentName,
  SchoolName,
  GroupName,
  SourceName,
  DamageType,
} from "dnd-home-utils";

import { arrayify } from "../../../lib/arrayify";
import { createStringValidator } from "../../../lib/validators/string-validator-with-regexp";
import { createNumberTransformer } from "../../../lib/transformers/number-transformer";
import { createBooleanTransformer } from "../../../lib/transformers/boolean-transformer";
import { safeContentForRegExp } from "../../../lib/constants";
import { sliceFn } from "../../../lib/slice-fn";

export class FilterSpellDto {
  @IsOptional()
  @Transform(toSelf)
  name?: string;

  @IsOptional()
  @Transform(toNumberArray)
  @IsIn(SPELL_LEVELS, { each: true })
  level?: SpellLevel[];

  @IsOptional()
  @Transform(toStringArray)
  school?: SchoolName[];

  @IsOptional()
  @Transform(toStringArray)
  @IsIn(COMPONENTS, { each: true })
  components?: ComponentName[];

  @IsOptional()
  @Transform(toSelf)
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

  @IsOptional()
  @Transform(toStringArray)
  @IsString({ each: true })
  damageTypes?: DamageType[];
}

const validateStringForRegExpAndSlice = sliceFn(
  createStringValidator(safeContentForRegExp),
  50
);

const toNumberOrThrow = createNumberTransformer({
  min: 0,
  max: 9,
  requireInt: true,
});

const toBooleanOrThrow = createBooleanTransformer();

function toSelf({ value }: { value: unknown }): string {
  return validateStringForRegExpAndSlice(value);
}

function toBoolean({ value }: { value: unknown }): boolean {
  return toBooleanOrThrow(value);
}

function toNumberArray({ value }: { value: unknown }): number[] {
  return arrayify(value).map(toNumberOrThrow);
}

function toStringArray({ value }: { value: unknown }): string[] {
  return arrayify(value).map(validateStringForRegExpAndSlice);
}

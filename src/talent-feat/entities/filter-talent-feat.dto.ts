import { IsOptional, IsIn, IsInt } from "class-validator";
import { Transform } from "class-transformer";

import { createStringValidator } from "../../../lib/validators/string-validator-with-regexp";
import { createNumberTransformer } from "../../../lib/transformers/number-transformer";
import { safeContentForRegExp } from "../../../lib/constants";
import { sliceFn } from "../../../lib/slice-fn";

export class FilterTalentFeatDto {
  @IsOptional()
  @Transform(toSelf)
  @IsIn(["talent", "feat"])
  type?: string;

  @IsOptional()
  @Transform(toSelf)
  name?: string;

  @IsOptional()
  @Transform(toNumber)
  @IsInt()
  minLevel?: number;

  // @IsOptional()
  // @Transform(toStringArray)
  // @IsString({ each: true })
  // tags?: SpellTag[];
}

const validateStringForRegExpAndSlice = sliceFn(
  createStringValidator(safeContentForRegExp),
  50
);

const toNumberOrThrow = createNumberTransformer({
  min: 1,
  max: 20,
  requireInt: true,
});

function toSelf({ value }: { value: unknown }): string {
  return validateStringForRegExpAndSlice(value);
}

function toNumber({ value }: { value: unknown }): number {
  return toNumberOrThrow(value);
}

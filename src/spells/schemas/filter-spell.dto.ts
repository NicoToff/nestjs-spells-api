import { BadRequestException } from "@nestjs/common";
import {
  IsOptional,
  IsAlphanumeric,
  isAlphanumeric,
  isString,
  IsString,
} from "class-validator";
import { Transform } from "class-transformer";

import { isSpellLevel } from "../entities/spell.type";

export class FilterSpellDto {
  @IsOptional()
  @IsAlphanumeric()
  name?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === "string" && isSpellLevel(+value)) return value;
  })
  level?: string;

  @IsOptional()
  @IsAlphanumeric()
  school?: string;

  @IsOptional()
  @IsAlphanumeric()
  group?: string;

  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) => {
    if (typeof value === "string") {
      const splitValues = value.split(",").filter(Boolean);
      splitValues.forEach((splitValue) => {
        if (!isAlphanumeric(splitValue))
          throw new BadRequestException(`Invalid source: ${splitValue}`);
      });
      return splitValues;
    }
  })
  sources?: string[];

  @IsOptional()
  @Transform(toBoolean)
  concentration?: boolean;

  @IsOptional()
  @Transform(toBoolean)
  ritual?: boolean;
}

function toBoolean({ value }: { value: unknown }) {
  if (isString(value)) {
    if (value === "true") return true;
    if (value === "false") return false;
  }
}

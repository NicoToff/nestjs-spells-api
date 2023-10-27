import {
  IsNotEmpty,
  IsArray,
  ArrayUnique,
  ArrayNotEmpty,
  IsOptional,
  IsBoolean,
  IsString,
  IsInt,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTalentFeatDto {
  @ApiProperty({ enum: ["talent", "feat"] })
  @IsString()
  @IsNotEmpty()
  type: "talent" | "feat";

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  minLevel?: number;

  @ApiProperty({ isArray: true, required: false, type: String })
  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsString({ each: true })
  prerequisites?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  flavor?: string;

  @ApiProperty({ isArray: true, required: true, type: String })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  description: string[];

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isPrivate?: boolean;

  //   @ApiProperty({ required: false, isArray: true, enum: SPELL_TAGS })
  //   @IsOptional()
  //   @ArrayUnique()
  //   @ArrayNotEmpty()
  //   @IsIn(SPELL_TAGS, {
  //     each: true,
  //     message: `Spell tags must be one or more of the following: ${SPELL_TAGS.join(
  //       ", "
  //     )}`,
  //   })
  //   tags?: SpellTag[];
}

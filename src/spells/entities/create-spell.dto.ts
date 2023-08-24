import {
  IsNotEmpty,
  Min,
  Max,
  IsIn,
  IsArray,
  ArrayUnique,
  ArrayNotEmpty,
  IsOptional,
  IsBoolean,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { ISpellBase } from "./spell.interface";
import { SCHOOLS, SchoolName } from "../../schools/entities/school.type";
import { GROUPS, GroupName } from "../../groups/entities/group.type";
import { SOURCES, SourceName } from "../../sources/entities/source.type";

export class CreateSpellDto implements ISpellBase {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  })
  @Min(0)
  @Max(9)
  @IsNotEmpty()
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

  @ApiProperty()
  @IsNotEmpty()
  castingTime: string;

  @ApiProperty()
  @IsNotEmpty()
  range: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  area?: string;

  @ApiProperty()
  @IsNotEmpty()
  duration: string;

  @ApiProperty()
  @IsNotEmpty()
  components: string;

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
  @IsNotEmpty()
  flavor?: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  atHigherLevels?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  cantripUpgrade?: string;

  @ApiProperty({ enum: SCHOOLS })
  @IsNotEmpty()
  @IsIn(SCHOOLS, {
    message: `School must be one of the following: ${SCHOOLS.join(", ")}`,
  })
  school: SchoolName;

  @ApiProperty({ enum: GROUPS, required: false })
  @IsOptional()
  @IsIn(GROUPS, {
    message: `Group must be one of the following: ${GROUPS.join(", ")}`,
  })
  group?: GroupName;

  @ApiProperty({ enum: SOURCES, isArray: true })
  @IsArray({
    message: "Sources must be an array of strings",
  })
  @ArrayUnique()
  @ArrayNotEmpty()
  @IsIn(SOURCES, {
    each: true,
    message: `Sources must be one or more of the following: ${SOURCES.join(
      ", "
    )}`,
  })
  sources: SourceName[];
}

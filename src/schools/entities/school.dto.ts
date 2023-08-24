import { IsIn, IsNotEmpty } from "class-validator";
import { ISchoolBase } from "./school.interface";
import { SCHOOLS, SchoolName } from "./school.type";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSchoolDto implements ISchoolBase {
  @ApiProperty({ enum: SCHOOLS })
  @IsNotEmpty()
  @IsIn(SCHOOLS, { message: `School must be one of ${SCHOOLS.join(", ")}` })
  name: SchoolName;
}

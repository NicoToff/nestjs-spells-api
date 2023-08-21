import { IsIn, IsNotEmpty } from "class-validator";
import { ISchoolBase } from "./school.interface";
import { SCHOOLS, SchoolName } from "./school.type";

export class CreateSchoolDto implements ISchoolBase {
  @IsNotEmpty()
  @IsIn(SCHOOLS, { message: `School must be one of ${SCHOOLS.join(", ")}` })
  name: SchoolName;
}

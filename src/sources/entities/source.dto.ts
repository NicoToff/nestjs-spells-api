import { IsIn, IsNotEmpty } from "class-validator";
import { ISourcebase } from "./source.interface";
import { SOURCES, SourceName } from "./source.type";

export class CreateSourceDto implements ISourcebase {
  @IsNotEmpty()
  @IsIn(SOURCES, {
    message: `Source must be one of the following: ${SOURCES.join(", ")}`,
  })
  name: SourceName;
}

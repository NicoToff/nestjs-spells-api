import { IsIn, IsNotEmpty } from "class-validator";
import { IGroupBase } from "./group.interface";
import { GROUPS, GroupName } from "./group.type";

export class CreateGroupDto implements IGroupBase {
  @IsNotEmpty()
  @IsIn(GROUPS, {
    message: `Group must be one of the following: ${GROUPS.join(", ")}`,
  })
  name: GroupName;
}

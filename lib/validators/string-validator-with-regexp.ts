import { BadRequestException } from "@nestjs/common";

export function createStringValidator(regExp: RegExp) {
  return (value: unknown) => {
    if (typeof value !== "string")
      throw new BadRequestException(`Invalid type: ${typeof value}`);
    if (!regExp.test(value))
      throw new BadRequestException(`Invalid chars in string: ${value}`);
    return value;
  };
}

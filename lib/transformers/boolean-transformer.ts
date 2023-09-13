import { BadRequestException } from "@nestjs/common";

export type CreateBooleanValidatorOptions = {
  /** If `true`, only accept "true" and "false" as valid boolean strings. */
  acceptOnlyLowercase?: boolean;
  /** If `true`, only boolean values are accepted; i.e. the "transformer" will just work as a validator. */
  throwIfNotBoolean?: boolean;
};
export function createBooleanTransformer({
  acceptOnlyLowercase = false,
  throwIfNotBoolean = false,
}: CreateBooleanValidatorOptions = {}) {
  return (value: unknown) => {
    if (typeof value === "boolean") return value;
    if (typeof value !== "string")
      throw new BadRequestException(`Invalid type: ${typeof value}`);
    else if (throwIfNotBoolean)
      throw new BadRequestException(`Invalid type: ${typeof value}`);
    const strValue = acceptOnlyLowercase ? value : value.toLowerCase();
    if (strValue === "true") return true;
    else if (strValue === "false") return false;
    throw new BadRequestException(
      `Invalid boolean string '${value}'. Must be 'true' or 'false'`
    );
  };
}

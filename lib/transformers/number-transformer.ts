import { BadRequestException } from "@nestjs/common";

export type CreateNumberValidatorOptions = {
  /** The minimum value allowed (inclusive). Defaults to `Number.MIN_VALUE`. */
  min?: number;
  /** The maximum value allowed (inclusive). Defaults to `Number.MAX_VALUE`. */
  max?: number;
  /** If `true`, only accept integer numbers. */
  requireInt?: boolean;
  /** If `true`, only accept numbers. */
  throwIfNotNumber?: boolean;
};
export function createNumberTransformer({
  min = Number.MIN_VALUE,
  max = Number.MAX_VALUE,
  requireInt = false,
  throwIfNotNumber = false,
}: CreateNumberValidatorOptions = {}) {
  return (value: unknown) => {
    let num = NaN;
    if (typeof value === "number") num = value;
    else if (typeof value === "string" && !throwIfNotNumber)
      num = Number(value);
    else throw new BadRequestException(`Invalid type: ${typeof value}`);

    if (isNaN(num)) throw new BadRequestException(`Invalid number: ${value}`);
    if (num < min || num > max)
      throw new BadRequestException(
        `Number ${num} is not within ${min} and ${max}`
      );
    if (requireInt && !Number.isInteger(num))
      throw new BadRequestException(`Number ${num} is not an integer`);
    return num;
  };
}

import { PipeTransform, Injectable, BadRequestException } from "@nestjs/common";

/**
 * This pipe transforms a string query parameter into a boolean.
 *
 * If the value of the string isn't "true" or "false", a BadRequestException is thrown.
 */
@Injectable()
export class QueryBooleanPipe implements PipeTransform<string, boolean> {
  transform(value: string): boolean {
    if (value === "true") {
      return true;
    } else if (value === "false") {
      return false;
    }

    throw new BadRequestException(
      "Invalid value for boolean query parameter. Valid values are 'true' and 'false'"
    );
  }
}

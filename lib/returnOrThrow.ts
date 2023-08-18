import { HttpException, HttpStatus } from "@nestjs/common";

/** Returns the item(s) if they provide content, or throws a 404
 * @param data The item(s) to return or throw
 * @param errorMessage The error message to throw if no content is found (default: "No content found")
 */
export async function returnOrThrowIfNoContent<T>(
  data: T | T[] | undefined | null,
  errorMessage = "No content found"
) {
  if ((Array.isArray(data) && data.length > 0) || data) {
    return data;
  }
  throw new HttpException(errorMessage, HttpStatus.NOT_FOUND);
}

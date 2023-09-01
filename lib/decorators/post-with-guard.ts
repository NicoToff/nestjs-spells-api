import { Post, UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "../../src/auth/auth.guard";

export function PostGuard(postArgs?: Parameters<typeof Post>[number]) {
  return applyDecorators(Post(postArgs), UseGuards(AuthGuard));
}

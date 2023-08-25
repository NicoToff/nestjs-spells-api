import { Post, UseGuards, applyDecorators } from "@nestjs/common";
import { AuthGuard } from "../../src/auth/auth.guard";

export const PostGuard = () => applyDecorators(Post(), UseGuards(AuthGuard));

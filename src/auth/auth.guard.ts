import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { ApiKeyService } from "../on-boot/api-keys.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private apiKeyService: ApiKeyService) {}

  async canActivate(ctx: ExecutionContext) {
    const apiKey = this.extractKey(ctx);

    if (!apiKey || Array.isArray(apiKey) || !this.validateKey(apiKey)) {
      throw new UnauthorizedException();
    }

    const isAuthed = await this.apiKeyService.apiKeyExistsInDb(apiKey);

    if (!isAuthed) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractKey(ctx: ExecutionContext) {
    return ctx.switchToHttp().getRequest<Request>().headers["api-key"];
  }

  private validateKey(key: string) {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexExp.test(key);
  }
}

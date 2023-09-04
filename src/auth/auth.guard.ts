import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import { ApiKeyService } from "../on-boot/api-keys.service";
import { validateUUID } from "../../lib/validate-uuid";

import type { Request } from "express";
import { API_KEY_HEADER } from "lib/constants";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private apiKeyService: ApiKeyService) {}

  async canActivate(ctx: ExecutionContext) {
    const apiKey = this.extractKey(ctx);

    if (!apiKey || Array.isArray(apiKey) || !validateUUID(apiKey)) {
      throw new UnauthorizedException();
    }

    const isAuthed = await this.apiKeyService.apiKeyExistsInDb(apiKey);

    if (!isAuthed) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractKey(ctx: ExecutionContext) {
    return ctx.switchToHttp().getRequest<Request>().headers[API_KEY_HEADER];
  }
}

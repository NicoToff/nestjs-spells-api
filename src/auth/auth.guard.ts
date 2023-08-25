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

    if (!apiKey || Array.isArray(apiKey)) {
      throw new UnauthorizedException();
    }

    return await this.apiKeyService.apiKeyIsValid(apiKey);
  }

  private extractKey(ctx: ExecutionContext) {
    return ctx.switchToHttp().getRequest<Request>().headers["api-key"];
  }
}

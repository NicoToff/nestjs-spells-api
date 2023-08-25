import { Module } from "@nestjs/common";

import { AuthGuard } from "./auth.guard";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [ApiKeyModule],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthGuardModule {}

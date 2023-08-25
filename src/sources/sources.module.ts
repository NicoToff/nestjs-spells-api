import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SourcesService } from "./sources.service";
import { SourcesController } from "./sources.controller";

import { Source } from "./entities/source.entity";
import { AuthGuardModule } from "../auth/auth.module";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [TypeOrmModule.forFeature([Source]), AuthGuardModule, ApiKeyModule],
  controllers: [SourcesController],
  providers: [SourcesService],
})
export class SourcesModule {}

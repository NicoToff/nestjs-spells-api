import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SchoolsService } from "./schools.service";
import { SchoolsController } from "./schools.controller";

import { School } from "./entities/school.entity";
import { AuthGuardModule } from "../auth/auth.module";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [TypeOrmModule.forFeature([School]), AuthGuardModule, ApiKeyModule],
  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}

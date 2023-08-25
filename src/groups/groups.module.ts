import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { GroupsService } from "./groups.service";
import { GroupsController } from "./groups.controller";

import { Group } from "./entities/group.entity";
import { AuthGuardModule } from "../auth/auth.module";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [TypeOrmModule.forFeature([Group]), AuthGuardModule, ApiKeyModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}

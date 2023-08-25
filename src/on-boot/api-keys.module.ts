import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ApiKeyService } from "./api-keys.service";

import { ApiKey } from "./entities/api-keys.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ApiKey])],
  providers: [ApiKeyService],
  exports: [ApiKeyService],
})
export class ApiKeyModule {}

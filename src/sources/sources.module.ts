import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SourcesService } from "./sources.service";
import { SourcesController } from "./sources.controller";

import { Source } from "./entities/source.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Source])],
  controllers: [SourcesController],
  providers: [SourcesService],
})
export class SourcesModule {}

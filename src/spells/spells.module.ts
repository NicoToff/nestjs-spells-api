import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MongooseModule } from "@nestjs/mongoose";

import { SpellsService } from "./spells.service";
import { SpellsController } from "./spells.controller";

import { Spell } from "./entities/spell.entity";
import { Spell as SpellMongo, SpellSchema } from "./schemas/spell.schema";

import { AllReposModule } from "../repos/all-repos.module";
import { AuthGuardModule } from "../auth/auth.module";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Spell]),
    MongooseModule.forFeature([{ name: SpellMongo.name, schema: SpellSchema }]),
    AllReposModule,
    AuthGuardModule,
    ApiKeyModule,
  ],
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { SpellsService } from "./spells.service";
import { SpellsController } from "./spells.controller";

import { Spell, SpellSchema } from "./schemas/spell.schema";

import { AuthGuardModule } from "../auth/auth.module";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Spell.name, schema: SpellSchema }]),
    AuthGuardModule,
    ApiKeyModule,
  ],
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}

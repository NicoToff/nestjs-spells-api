import { Module } from "@nestjs/common";
import { SpellsService } from "./spells.service";
import { SpellsController } from "./spells.controller";

@Module({
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}

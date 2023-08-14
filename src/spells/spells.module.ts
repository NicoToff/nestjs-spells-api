import { Module } from "@nestjs/common";
import { SpellsService } from "./spells.service";
import { SpellsController } from "./spells.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Spell } from "./entities/spell.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Spell])],
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}

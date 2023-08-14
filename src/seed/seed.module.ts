import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SeedService, SeedConfig, SEED_CONFIG } from "./seed.service";

import { Source, SOURCES } from "../sources/entities/source.entity";
import { Spell } from "../spells/entities/spell.entity";
import { spellData } from "../../lib/spell-data";

@Module({
  imports: [
    TypeOrmModule.forFeature([Spell]),
    TypeOrmModule.forFeature([Source]),
  ],
  providers: [
    SeedService,
    {
      provide: SEED_CONFIG,
      useValue: { sourceData: SOURCES, spellData: spellData } as SeedConfig,
    },
  ],
})
export class SeedModule {}

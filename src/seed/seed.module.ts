import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SeedService, SeedConfig, SEED_CONFIG } from "./seed.service";

import { Source, SOURCES } from "../sources/entities/source.entity";
import { School, SCHOOLS } from "../schools/entities/school.entity";
import { Spell } from "../spells/entities/spell.entity";
import { spellData } from "../../lib/spell-data";

@Module({
  imports: [
    TypeOrmModule.forFeature([Spell]),
    TypeOrmModule.forFeature([Source]),
    TypeOrmModule.forFeature([School]),
  ],
  providers: [
    SeedService,
    {
      provide: SEED_CONFIG,
      useValue: {
        sourceData: SOURCES,
        spellData: spellData,
        schoolData: SCHOOLS,
      } as SeedConfig,
    },
  ],
})
export class SeedModule {}

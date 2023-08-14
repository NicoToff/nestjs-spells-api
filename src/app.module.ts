import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { Spell } from "./spells/entities/spell.entity";
import { Source } from "./sources/entities/source.entity";

import { SpellsModule } from "./spells/spells.module";
import { SourcesModule } from "./sources/sources.module";
import { SeedModule } from "./seed/seed.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./db/sqlite3/db.sqlite",
      entities: [Spell, Source],
      synchronize: true,
    }),
    SpellsModule,
    SourcesModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

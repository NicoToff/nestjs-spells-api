import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Spell } from "./spells/entities/spell.entity";
import { Source } from "./sources/entities/source.entity";
import { School } from "./schools/entities/school.entity";
import { Group } from "./groups/entities/group.entity";

import { SpellsModule } from "./spells/spells.module";
import { SourcesModule } from "./sources/sources.module";
import { SchoolsModule } from "./schools/schools.module";
import { GroupsModule } from "./groups/groups.module";
// import { SeedModule } from "./seed/seed.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./db/sqlite3/db.sqlite",
      entities: [Spell, Source, School, Group],
      synchronize: true,
    }),
    SpellsModule,
    SourcesModule,
    SchoolsModule,
    GroupsModule,
    // SeedModule,
  ],
})
export class AppModule {}

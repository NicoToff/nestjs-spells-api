import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SpellsModule } from "./spells/spells.module";
import { SourcesModule } from "./sources/sources.module";
import { SchoolsModule } from "./schools/schools.module";
import { GroupsModule } from "./groups/groups.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./db/sqlite3/db.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    SpellsModule,
    SourcesModule,
    SchoolsModule,
    GroupsModule,
  ],
})
export class AppModule {}

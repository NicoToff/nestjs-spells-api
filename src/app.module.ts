import { join } from "path";

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import { GroupsModule } from "./groups/groups.module";
import { SchoolsModule } from "./schools/schools.module";
import { SourcesModule } from "./sources/sources.module";
import { SpellsModule } from "./spells/spells.module";
import { ApiKeyModule } from "./on-boot/api-keys.module";
import { AuthGuardModule } from "./auth/auth.module";

@Module({
  // NOTE : Imports are resolved in appearing order
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./db/sqlite3/db.sqlite",
      entities: [join(__dirname, "/**/*.entity{.ts,.js}")],
      synchronize: true,
    }),
    ApiKeyModule,
    AuthGuardModule,
    GroupsModule,
    SchoolsModule,
    SourcesModule,
    SpellsModule,
  ],
})
export class AppModule {}

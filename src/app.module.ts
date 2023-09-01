import { join } from "path";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SpellsModule } from "./spells/spells.module";
import { ApiKeyModule } from "./on-boot/api-keys.module";
import { AuthGuardModule } from "./auth/auth.module";

@Module({
  // NOTE : Imports are resolved in appearing order
  imports: [
    ConfigModule.forRoot(), // This loads the .env file, so this must be the first import
    MongooseModule.forRoot(process.env.MONGODB_URI as string, {
      dbName: process.env.MONGODB_DB_NAME,
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./db/sqlite3/db.sqlite",
      entities: [join(__dirname, "/**/*.entity{.ts,.js}")],
      synchronize: true,
    }),
    ApiKeyModule,
    AuthGuardModule,
    SpellsModule,
  ],
})
export class AppModule {}

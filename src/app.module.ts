import { join } from "path";

import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";

import { SpellsModule } from "./spells/spells.module";
import { ApiKeyModule } from "./on-boot/api-keys.module";
import { AuthGuardModule } from "./auth/auth.module";
import { AppController } from "./app.controller";

import { ThrottlingConfigEnum } from "../lib/constants";
import { TalentFeatModule } from "./talent-feat/talent-feat.module";
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
    TalentFeatModule,
    ThrottlerModule.forRoot([
      {
        ttl: ThrottlingConfigEnum.ttl,
        limit: ThrottlingConfigEnum.limit,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

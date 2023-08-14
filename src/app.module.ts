import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SpellsModule } from "./spells/spells.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Spell } from "./spells/entities/spell.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./db/sqlite3/db.sqlite",
      entities: [Spell],
      synchronize: true,
    }),
    SpellsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

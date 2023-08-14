import { Module } from "@nestjs/common";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { SpellsModule } from "@/spells/spells.module";

@Module({
  imports: [SpellsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

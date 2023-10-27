import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TalentFeatService } from "./talent-feat.service";
import { TalentFeatController } from "./talent-feat.controller";

import { TalentFeat, TalentFeatSchema } from "./schemas/talent-feat.schema";

import { AuthGuardModule } from "../auth/auth.module";
import { ApiKeyModule } from "../on-boot/api-keys.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TalentFeat.name, schema: TalentFeatSchema },
    ]),
    AuthGuardModule,
    ApiKeyModule,
  ],
  controllers: [TalentFeatController],
  providers: [TalentFeatService],
})
export class TalentFeatModule {}

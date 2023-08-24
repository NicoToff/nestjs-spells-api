import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AllReposService } from "./all-repos.service";

import { Group } from "../groups/entities/group.entity";
import { Source } from "../sources/entities/source.entity";
import { School } from "../schools/entities/school.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    TypeOrmModule.forFeature([Source]),
    TypeOrmModule.forFeature([School]),
  ],
  providers: [AllReposService],
  exports: [AllReposService],
})
export class AllReposModule {}

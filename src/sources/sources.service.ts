import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Source } from "./entities/source.entity";

@Injectable()
export class SourcesService {
  constructor(
    @InjectRepository(Source)
    private sourcesRepository: Repository<Source>
  ) {}

  findAll() {
    return this.sourcesRepository.find();
  }

  findOne(slug: string) {
    return this.sourcesRepository.findOne({
      where: {
        slug,
      },
    });
  }
}

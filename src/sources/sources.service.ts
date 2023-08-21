import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Source } from "./entities/source.entity";
import { CreateSourceDto } from "./entities/source.dto";

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
      where: { slug },
    });
  }

  create(createSourceDto: CreateSourceDto) {
    Logger.verbose(
      `Creating source: ${createSourceDto.name}`,
      "SourcesService"
    );
    return this.sourcesRepository.save(new Source(createSourceDto.name));
  }
}

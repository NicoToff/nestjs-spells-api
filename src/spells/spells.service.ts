import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Spell } from "./entities/spell.entity";

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spell)
    private spellsRepository: Repository<Spell>
  ) {}

  findAll() {
    return this.spellsRepository.find({
      relations: ["sources"],
      cache: true,
    });
  }

  findOne(slug: string) {
    return this.spellsRepository.findOne({
      where: {
        slug,
      },
      relations: ["sources"],
    });
  }

  findBySource(source: string) {
    return this.spellsRepository.find({
      where: {
        sources: {
          slug: source,
        },
      },
      relations: ["sources"],
    });
  }
}

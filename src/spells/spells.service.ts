import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Spell } from "./entities/spell.entity";
import { spells } from "./spells.mockup";

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spell)
    private spellsRepository: Repository<Spell>
  ) {}

  findAll() {
    return this.spellsRepository.find();
  }

  findOne(slug: string) {
    return this.spellsRepository.findOne({
      where: {
        slug,
      },
    });
  }

  async initMockup() {
    await this.spellsRepository.clear();
    await this.spellsRepository.save(spells);
    return this.spellsRepository.find();
  }
}

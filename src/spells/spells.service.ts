import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Spell, type SpellRelation } from "./entities/spell.entity";

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spell)
    private spellsRepository: Repository<Spell>
  ) {}

  private relations: SpellRelation[] = ["sources", "school"];

  findAll() {
    return this.spellsRepository.find({
      relations: this.relations,
      cache: true,
    });
  }

  findOne(slug: string) {
    return this.spellsRepository.findOne({
      where: {
        slug,
      },
      relations: this.relations,
    });
  }

  findBySource(source: string) {
    return this.spellsRepository.find({
      where: {
        sources: {
          slug: source,
        },
      },
      relations: this.relations,
    });
  }

  flattenSpell(spell: Spell) {
    return {
      ...spell,
      school: spell.school.name,
      sources: spell.sources.map((source) => source.name),
    };
  }

  flattenSpellArray(spells: Spell[]) {
    return spells.map((spell) => this.flattenSpell(spell));
  }
}

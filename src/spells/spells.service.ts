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

  async findAll(simpleRelations: boolean) {
    const spells = await this.spellsRepository.find({
      relations: this.relations,
      cache: true,
    });
    if (simpleRelations) {
      return spells.map(this.simplify);
    }
    return spells;
  }

  async findOne(slug: string, simpleRelations: boolean) {
    const spell = await this.spellsRepository.findOne({
      where: { slug },
      relations: this.relations,
    });
    if (simpleRelations && spell) {
      return this.simplify(spell);
    }
    return spell;
  }

  async findBySource(source: string, simpleRelations: boolean) {
    const spells = await this.spellsRepository.find({
      where: {
        sources: {
          slug: source,
        },
      },
      relations: this.relations,
    });
    if (simpleRelations) {
      return spells.map(this.simplify);
    }
    return spells;
  }

  private simplify(spell: Spell) {
    return {
      ...spell,
      school: spell.school.name,
      sources: spell.sources.map((source) => source.name),
    };
  }
}

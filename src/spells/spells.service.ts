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

  async findAll(simplifyRelations: boolean) {
    const spells = await this.spellsRepository.find({
      relations: this.relations,
      cache: true,
    });
    if (simplifyRelations) {
      return spells.map(this.flattenSpell);
    }
    return spells;
  }

  async findOne(slug: string, simplifyRelations: boolean) {
    const spell = await this.spellsRepository.findOne({
      where: { slug },
      relations: this.relations,
    });
    if (simplifyRelations && spell) {
      return this.flattenSpell(spell);
    }
    return spell;
  }

  async findBySource(source: string, simplifyRelations: boolean) {
    const spells = await this.spellsRepository.find({
      where: {
        sources: {
          slug: source,
        },
      },
      relations: this.relations,
    });
    if (simplifyRelations) {
      return spells.map(this.flattenSpell);
    }
    return spells;
  }

  private flattenSpell(spell: Spell) {
    return {
      ...spell,
      school: spell.school.name,
      sources: spell.sources.map((source) => source.name),
    };
  }
}

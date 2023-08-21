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

  private relations: SpellRelation[] = ["sources", "school", "group"];

  findAll() {
    return this.spellsRepository.find({
      relations: this.relations,
      cache: true,
    });
  }

  findOne(slug: string) {
    return this.spellsRepository.findOne({
      where: { slug },
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

  findBySchool(school: string) {
    return this.spellsRepository.find({
      where: {
        school: {
          slug: school,
        },
      },
      relations: this.relations,
    });
  }

  findByGroup(group: string) {
    return this.spellsRepository.find({
      where: {
        group: {
          slug: group,
        },
      },
      relations: this.relations,
    });
  }
  /**
   * Make relation data on a spell easier to consume by returning only the `name` property value of the relation or an array of those values.
   * @example school: {slug: 'abjuration', name: 'Abjuration'} will become school: 'Abjuration'
   */
  simplifyRelations(spell: Spell) {
    return {
      ...spell,
      school: spell.school.name,
      group: spell.group?.name,
      sources: spell.sources.map((source) => source.name),
    };
  }
}

export type SpellSimplified = ReturnType<SpellsService["simplifyRelations"]>;

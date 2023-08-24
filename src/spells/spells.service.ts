import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { AllReposService } from "../repos/all-repos.service";

import { School } from "../schools/entities/school.entity";

import { Spell } from "./entities/spell.entity";
import { CreateSpellDto } from "./entities/create-spell.dto";

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spell)
    private spellsRepository: Repository<Spell>,
    private allReposService: AllReposService
  ) {}

  private relations = Spell.spellRelationColumnNames;

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

  async create(createSpellDto: CreateSpellDto) {
    const { school, group, sources } = createSpellDto;
    const schoolFound = (await this.allReposService
      .getSchoolRepository()
      .findOne({
        where: { name: school },
      })) as School;
    const groupFoundMaybe = group
      ? (await this.allReposService.getGroupRepository().findOne({
          where: { name: group },
        })) ?? undefined
      : undefined;
    const sourcesFound = await this.allReposService.getSourceRepository().find({
      where: sources.map((source) => ({ name: source })),
    });
    return this.spellsRepository.save(
      new Spell({
        ...createSpellDto,
        school: schoolFound,
        sources: sourcesFound,
        group: groupFoundMaybe,
      })
    );
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

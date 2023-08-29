import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";

import { AllReposService } from "../repos/all-repos.service";

import { School } from "../schools/entities/school.entity";

import { Spell } from "./entities/spell.entity";
import { CreateSpellDto } from "./entities/create-spell.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Spell as SpellMongo } from "./schemas/spell.schema";
import { FilterQuery, Model } from "mongoose";
import { FilterSpellDto } from "./schemas/filter-spell.dto";

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(Spell)
    private spellsRepository: Repository<Spell>,
    private allReposService: AllReposService,
    @InjectModel(SpellMongo.name) private spellModel: Model<SpellMongo>
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
    const newSpell = new Spell({
      ...createSpellDto,
      school: schoolFound,
      sources: sourcesFound,
      group: groupFoundMaybe,
    });
    return this.spellsRepository.save(newSpell);
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

  mongoFindAll({
    name,
    level,
    school,
    group,
    sources,
    concentration,
    ritual,
  }: FilterSpellDto) {
    console.log({ name, level, school, group, sources, concentration, ritual });
    const filterConditions = {
      ...str("name", name),
      ...str("school", school),
      ...str("group", group),
      ...(sources && sources.length
        ? {
            sources: {
              $elemMatch: { $in: sources.map((s) => new RegExp(s, "i")) },
            },
          }
        : {}),
      ...(level ? { level } : {}),
      ...bool("concentration", concentration),
      ...bool("ritual", ritual),
    };

    // const filter: FilterQuery<SpellMongo> = Object.fromEntries(
    //   Object.entries(filterConditions).filter(([, value]) => !isEmpty(value))
    // );

    console.log(filterConditions);
    return this.spellModel.find(filterConditions).exec();
  }
}

export type SpellSimplified = ReturnType<SpellsService["simplifyRelations"]>;

function str(fieldName: string, fieldValue: string | undefined) {
  if (fieldValue == null) return {};
  return { [fieldName]: { $regex: new RegExp(fieldValue, "i") } };
}

function bool(fieldName: string, fieldValue: boolean | undefined) {
  if (fieldValue == null) return {};
  return fieldValue
    ? { [fieldName]: true }
    : { $or: [{ [fieldName]: false }, { [fieldName]: { $exists: false } }] };
}

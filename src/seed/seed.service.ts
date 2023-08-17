import { Injectable, Inject, OnModuleInit } from "@nestjs/common";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Spell, type SpellDataType } from "../spells/entities/spell.entity";
import { Source, type SourceType } from "../sources/entities/source.entity";
import { School, type SchoolType } from "../schools/entities/school.entity";
import { Group, type GroupType } from "../groups/entities/group.entity";

export type SeedConfig = {
  sourceData: readonly SourceType[];
  spellData: readonly SpellDataType[];
  schoolData: readonly SchoolType[];
  groupData: readonly GroupType[];
};
export const SEED_CONFIG = Symbol("SEED_CONFIG");

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(Spell)
    private readonly spellRepository: Repository<Spell>,
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    @Inject(SEED_CONFIG) private readonly seedConfig: SeedConfig
  ) {}

  async onModuleInit() {
    Logger.debug("Seeding database...", "SeedService");
    Logger.debug(
      `${this.seedConfig.sourceData.length} available sources to seed`,
      "SeedService"
    );
    Logger.debug(
      `${this.seedConfig.spellData.length} available spells to seed`,
      "SeedService"
    );
    const allSources = await this.seedSources();
    const allSchools = await this.seedSchools();
    const allGroups = await this.seedGroups();
    this.seedSpells(allSources, allSchools, allGroups);
  }

  private async seedSources() {
    const firstCount = await this.sourceRepository.count();
    for (const data of this.seedConfig.sourceData) {
      const exists = await this.sourceRepository.exist({
        where: { name: data },
      });

      if (!exists) {
        await this.sourceRepository.save(new Source(data));
      }
    }
    const secondCount = await this.sourceRepository.count();
    Logger.debug(
      `Seeded ${secondCount - firstCount} new spell sources`,
      "SeedService"
    );
    return this.sourceRepository.find();
  }

  private async seedSchools() {
    const firstCount = await this.schoolRepository.count();
    for (const data of this.seedConfig.schoolData) {
      const exists = await this.schoolRepository.exist({
        where: { name: data },
      });

      if (!exists) {
        await this.schoolRepository.save(new School(data));
      }
    }
    const secondCount = await this.schoolRepository.count();
    Logger.debug(
      `Seeded ${secondCount - firstCount} new spell schools`,
      "SeedService"
    );
    return this.schoolRepository.find();
  }

  private async seedGroups() {
    const firstCount = await this.groupRepository.count();
    for (const data of this.seedConfig.groupData) {
      const exists = await this.groupRepository.exist({
        where: { name: data },
      });

      if (!exists) {
        await this.groupRepository.save(new Group(data));
      }
    }
    const secondCount = await this.groupRepository.count();
    Logger.debug(
      `Seeded ${secondCount - firstCount} new spell groups`,
      "SeedService"
    );
    return this.groupRepository.find();
  }

  private async seedSpells(
    sources: Source[],
    schools: School[],
    groups: Group[]
  ) {
    this.seedConfig.spellData.forEach(async (data) => {
      const exists = await this.spellRepository.exist({
        where: { name: data.name },
      });
      if (!exists) {
        const spell = new Spell(data);
        spell.sources = sources.filter((source) =>
          data.sources.includes(source.name)
        );
        spell.school = schools.find(
          (school) => school.name === data.school
        ) as School;
        if (data.group) {
          spell.group = groups.find(
            (group) => group.name === data.group
          ) as Group;
        }
        Logger.debug(`Seeding spell "${spell.name}"`, "SeedService");
        this.spellRepository.save(spell);
      }
    });
  }
}

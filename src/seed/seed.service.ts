import { Injectable, Inject, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Spell } from "../spells/entities/spell.entity";
import { Source, SourceType } from "../sources/entities/source.entity";
import { SpellDataType } from "lib/spell-data";

export type SeedConfig = {
  sourceData: readonly SourceType[];
  spellData: SpellDataType[];
};
export const SEED_CONFIG = Symbol("SEED_CONFIG");

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectRepository(Spell)
    private readonly spellRepository: Repository<Spell>,
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
    @Inject(SEED_CONFIG) private readonly seedConfig: SeedConfig
  ) {}

  async onModuleInit() {
    const allSources = await this.seedSources();
    this.seedSpells(allSources);
  }

  private async seedSources() {
    for (const data of this.seedConfig.sourceData) {
      const exists = await this.sourceRepository.exist({
        where: { name: data },
      });

      if (!exists) {
        await this.sourceRepository.save(new Source(data));
      }
    }
    return this.sourceRepository.find();
  }

  private async seedSpells(sources: Source[]) {
    this.seedConfig.spellData.forEach(async (data) => {
      const exists = await this.spellRepository.exist({
        where: { name: data.name },
      });
      if (!exists) {
        const spell = new Spell(data);
        spell.sources = sources.filter((source) =>
          data.sources.includes(source.name)
        );
        this.spellRepository.save(spell);
      }
    });
  }
}

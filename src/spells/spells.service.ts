import { Injectable /*, Logger*/ } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateSpellDto } from "./entities/create-spell.dto";
import { Spell } from "./schemas/spell.schema";
import { FilterSpellDto } from "./schemas/filter-spell.dto";

@Injectable()
export class SpellsService {
  constructor(@InjectModel(Spell.name) private spellModel: Model<Spell>) {}

  findAll({
    name,
    level,
    school,
    components,
    group,
    sources,
    concentration,
    ritual,
  }: FilterSpellDto) {
    // Logger.debug(
    //   `
    //   Received FilterSpellDto: ${JSON.stringify(
    //     {
    //       name,
    //       level,
    //       school,
    //       components,
    //       group,
    //       sources,
    //       concentration,
    //       ritual,
    //     },
    //     null,
    //     2
    //   )}`,
    //   "SpellsService"
    // );
    const filterConditions = {
      ...strRegExpFilter("name", name),
      ...(level != null ? { level } : {}),
      ...strRegExpFilter("school", school),
      ...strArrayRegExpFilter("components", components),
      ...strRegExpFilter("group", group),
      ...strArrayRegExpFilter("sources", sources),
      ...boolFilter("concentration", concentration),
      ...boolFilter("ritual", ritual),
    };

    // console.log(`filterConditions:`, filterConditions);

    return this.spellModel.find<Spell>(filterConditions, "-_id").exec();
  }

  async seedBulk(createSpellDtos: CreateSpellDto[]) {
    await this.deleteAll();
    return this.spellModel.insertMany<Spell>(createSpellDtos);
  }

  private deleteAll() {
    return this.spellModel.deleteMany().exec();
  }
}

function strRegExpFilter(
  fieldName: keyof CreateSpellDto,
  fieldValue: string | undefined,
  { flags = "i" }: { flags?: string } = {}
) {
  if (fieldValue == null) return {};
  return { [fieldName]: { $regex: new RegExp(fieldValue, flags) } };
}

function strArrayRegExpFilter(
  fieldName: keyof CreateSpellDto,
  fieldValues: string[] | undefined,
  { flags = "i" }: { flags?: string } = {}
) {
  if (fieldValues == null || !fieldValues.length) return {};
  return {
    [fieldName]: {
      $elemMatch: { $in: fieldValues.map((c) => new RegExp(c, flags)) },
    },
  };
}

function boolFilter(
  fieldName: keyof CreateSpellDto,
  fieldValue: boolean | undefined
) {
  if (fieldValue == null) return {};
  return fieldValue
    ? { [fieldName]: true }
    : {
        $or: [
          { [fieldName]: false },
          {
            [fieldName]: {
              $exists: false,
            },
          },
        ],
      };
}

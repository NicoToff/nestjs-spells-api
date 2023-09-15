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
    damageTypes,
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
    //       damageTypes,
    //       concentration,
    //       ritual,
    //     },
    //     null,
    //     2
    //   )}`,
    //   "SpellsService"
    // );
    const filterConditions = {
      ...strSearchTextFilter("name", name),
      ...strSearchTextFilter("group", name),
      ...findIfMatchInArray("level", level),
      ...findIfMatchInArray("school", school),
      ...strArrayRegExpFilter("components", components),
      ...strRegExpFilter("group", group),
      ...strArrayRegExpFilter("sources", sources),
      ...strArrayRegExpFilter("damageTypes", damageTypes),
      ...boolFilter("concentration", concentration),
      ...boolFilter("ritual", ritual),
      ...boolFilter("isPrivate", false),
    };

    return this.spellModel
      .find<Spell>(filterConditions, "-_id -isPrivate")
      .exec();
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
  fieldName: keyof Spell,
  fieldValue: string | undefined,
  { flags = "i" }: { flags?: string } = {}
) {
  if (fieldValue == null) return {};
  return { [fieldName]: { $regex: new RegExp(fieldValue, flags) } };
}

function strSearchTextFilter(
  fieldName: keyof Spell,
  fieldValue: string | undefined,
  { flags = "i" }: { flags?: string } = {}
) {
  if (fieldValue == null) return {};
  const words = fieldValue.toLowerCase().split(" ");
  const valArr = [...new Set(words.filter(Boolean))];
  const regExps = valArr.map((v) => new RegExp(v, flags));
  const conditions = regExps.map((r) => ({ [fieldName]: { $regex: r } }));
  return { $and: conditions };
}

function strArrayRegExpFilter(
  fieldName: keyof Spell,
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

function boolFilter(fieldName: keyof Spell, fieldValue: boolean | undefined) {
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

function findIfMatchInArray<T extends number | string>(
  fieldName: keyof Spell,
  fieldValues: T[] | undefined
) {
  if (fieldValues == null || !fieldValues.length) return {};
  return { [fieldName]: { $in: fieldValues } };
}

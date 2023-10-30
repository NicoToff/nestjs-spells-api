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
    savingThrow,
    tags,
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
    const inNameOrGroup = [] as { $and: any }[];
    strSearchTextFilter("name", name, inNameOrGroup);
    strSearchTextFilter("group", name, inNameOrGroup);
    const filterConditions: { [key: string]: any } = {
      ...findIfMatchInArray("level", level),
      ...findIfMatchInArray("school", school),
      ...strArrayRegExpFilter("components", components),
      ...strRegExpFilter("group", group),
      ...strArrayRegExpFilter("sources", sources),
      ...strArrayRegExpFilter("damageTypes", damageTypes),
      ...boolFilter("concentration", concentration),
      ...boolFilter("ritual", ritual),
      ...boolFilter("isPrivate", false),
      ...findIfMatchInArray("savingThrow", savingThrow),
      ...strArrayRegExpFilter("tags", tags),
    };
    if (inNameOrGroup.length) {
      filterConditions["$or"] = inNameOrGroup;
    }
    // console.log("filterConditions:", JSON.stringify(filterConditions, null, 2));
    return this.spellModel
      .find<Spell>(filterConditions, "-_id -isPrivate")
      .exec()
      .then((spells) => spells.sort(sortBySpellFullName));
  }

  async findBySlug(slug: string) {
    return this.spellModel
      .findOne({ slug }, "-_id -isPrivate")
      .exec()
      .catch(() => null);
  }

  async seedBulk(createSpellDtos: CreateSpellDto[]) {
    await this.deleteAll();
    return this.spellModel.insertMany<CreateSpellDto>(createSpellDtos);
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
  arr: { $and: any }[],
  { flags = "i" }: { flags?: string } = {}
) {
  if (fieldValue == null) return {};
  const words = fieldValue.toLowerCase().split(" ");
  const valArr = [...new Set(words.filter(Boolean))];
  const regExps = valArr.map((v) => new RegExp(v, flags));
  const conditions = regExps.map((r) => ({ [fieldName]: { $regex: r } }));
  arr.push({ $and: conditions });
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
  return { [fieldName]: !!fieldValue };
}

function findIfMatchInArray<T extends number | string>(
  fieldName: keyof Spell,
  fieldValues: T[] | undefined
) {
  if (fieldValues == null || !fieldValues.length) return {};
  return { [fieldName]: { $in: fieldValues } };
}

function sortBySpellFullName(s1: Spell, s2: Spell) {
  const aFullName = `${s1.group}${s1.name}`;
  const bFullName = `${s2.group}${s2.name}`;
  return aFullName.localeCompare(bFullName);
}

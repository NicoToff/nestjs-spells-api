import { Injectable /*, Logger*/ } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateTalentFeatDto } from "./entities/create-talent-feat.dto";
import { TalentFeat } from "./schemas/talent-feat.schema";
// import { FilterSpellDto } from "./schemas/filter-spell.dto";

@Injectable()
export class TalentFeatService {
  constructor(
    @InjectModel(TalentFeat.name) private talentFeatModel: Model<TalentFeat>
  ) {}

  findAll(/*{
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
  }: FilterSpellDto*/) {
    // Logger.debug(
    //   `Received FilterSpellDto: ${JSON.stringify(
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
    /*const inNameOrGroup = [] as { $and: any }[];
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
      .then((spells) => spells.sort(sortBySpellFullName));*/
    return this.talentFeatModel
      .find({}, "-_id -isPrivate")
      .exec()
      .then((talentFeats) => talentFeats.sort(sortByTalentFeatByName));
  }

  async seedBulk(createTalentFeatDtos: CreateTalentFeatDto[]) {
    await this.deleteAll();
    return this.talentFeatModel.insertMany<TalentFeat>(createTalentFeatDtos);
  }

  private deleteAll() {
    return this.talentFeatModel.deleteMany().exec();
  }
}

// function strRegExpFilter(
//   fieldName: keyof Spell,
//   fieldValue: string | undefined,
//   { flags = "i" }: { flags?: string } = {}
// ) {
//   if (fieldValue == null) return {};
//   return { [fieldName]: { $regex: new RegExp(fieldValue, flags) } };
// }

// function strSearchTextFilter(
//   fieldName: keyof Spell,
//   fieldValue: string | undefined,
//   arr: { $and: any }[],
//   { flags = "i" }: { flags?: string } = {}
// ) {
//   if (fieldValue == null) return {};
//   const words = fieldValue.toLowerCase().split(" ");
//   const valArr = [...new Set(words.filter(Boolean))];
//   const regExps = valArr.map((v) => new RegExp(v, flags));
//   const conditions = regExps.map((r) => ({ [fieldName]: { $regex: r } }));
//   arr.push({ $and: conditions });
// }

// function strArrayRegExpFilter(
//   fieldName: keyof Spell,
//   fieldValues: string[] | undefined,
//   { flags = "i" }: { flags?: string } = {}
// ) {
//   if (fieldValues == null || !fieldValues.length) return {};
//   return {
//     [fieldName]: {
//       $elemMatch: { $in: fieldValues.map((c) => new RegExp(c, flags)) },
//     },
//   };
// }

// function boolFilter(fieldName: keyof Spell, fieldValue: boolean | undefined) {
//   if (fieldValue == null) return {};
//   return { [fieldName]: !!fieldValue };
// }

// function findIfMatchInArray<T extends number | string>(
//   fieldName: keyof Spell,
//   fieldValues: T[] | undefined
// ) {
//   if (fieldValues == null || !fieldValues.length) return {};
//   return { [fieldName]: { $in: fieldValues } };
// }

function sortByTalentFeatByName(tf1: TalentFeat, tf2: TalentFeat) {
  return tf1.name.localeCompare(tf2.name);
}

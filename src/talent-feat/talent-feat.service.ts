import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateTalentFeatDto } from "./entities/create-talent-feat.dto";
import { TalentFeat } from "./schemas/talent-feat.schema";
import { FilterTalentFeatDto } from "./entities/filter-talent-feat.dto";

@Injectable()
export class TalentFeatService {
  constructor(
    @InjectModel(TalentFeat.name) private talentFeatModel: Model<TalentFeat>
  ) {}

  findAll({ type, name, minLevel }: FilterTalentFeatDto) {
    Logger.debug(
      `Received FilterSpellDto: ${JSON.stringify(
        {
          name,
          minLevel,
        },
        null,
        2
      )}`,
      "FilterSpellService"
    );
    const nameChunks = [] as { $and: any }[];
    strSearchTextFilter("name", name, nameChunks);

    const filterConditions: { [key: string]: any } = {
      ...strRegExpFilter("type", type),
      ...findIfValueIsEqualOrLowerThan("minLevel", minLevel),
    };
    if (nameChunks.length) {
      filterConditions["$or"] = nameChunks;
    }

    return this.talentFeatModel
      .find(filterConditions, "-_id -isPrivate")
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

function strRegExpFilter(
  fieldName: keyof TalentFeat,
  fieldValue: string | undefined,
  { flags = "i" }: { flags?: string } = {}
) {
  if (fieldValue == null) return {};
  return { [fieldName]: { $regex: new RegExp(fieldValue, flags) } };
}

function strSearchTextFilter(
  fieldName: keyof TalentFeat,
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

function findIfValueIsEqualOrLowerThan(
  fieldName: keyof TalentFeat,
  fieldValue: number | undefined
) {
  if (fieldValue == null) return {};
  return { [fieldName]: { $lte: fieldValue } };
}

function sortByTalentFeatByName(tf1: TalentFeat, tf2: TalentFeat) {
  return tf1.name.localeCompare(tf2.name);
}

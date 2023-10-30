import {
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
  Query,
  Body,
  ParseArrayPipe,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBody,
  ApiHeader,
} from "@nestjs/swagger";

import { TalentFeatService } from "./talent-feat.service";

import { TalentFeat } from "./schemas/talent-feat.schema";

import { CreateTalentFeatDto } from "./entities/create-talent-feat.dto";

import {
  API_KEY_HEADER,
  ApiTagsEnum,
  RoutePathPrefixEnum,
} from "../../lib/constants";
import { PostGuard } from "../../lib/decorators/post-with-guard";
import { FilterTalentFeatDto } from "./entities/filter-talent-feat.dto";

@ApiTags(ApiTagsEnum.TalentFeat)
@Controller(RoutePathPrefixEnum.talentFeat)
export class TalentFeatController {
  constructor(private readonly talentFeatService: TalentFeatService) {}

  @ApiOperation({
    summary: "Get all talents and feats that match query",
    description:
      "This endpoint returns all homebrewed talents and feats in the database. You can filter the results by setting various query parameters. If no talent or feat matches the query, an empty array is returned.",
  })
  @ApiResponse({
    status: 200,
    description: "The requested talent(s) and/or feat(s)",
    isArray: true,
    type: TalentFeat,
  })
  @ApiQuery({
    name: "type",
    description: "Whether talent or feat should be included in the results",
    required: false,
    enum: ["talent", "feat"],
  })
  @ApiQuery({
    name: "name",
    description:
      "Strings of characters that the talent or feat name must contain",
    required: false,
    example: "actor",
    type: String,
  })
  @ApiQuery({
    name: "minLevel",
    description: "The minimum level required to take the talent or feat",
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: "prerequisites",
    description: "The list of prerequisites to take the talent or feat",
    required: false,
    isArray: true,
    type: String,
  })
  // @ApiQuery({
  //   name: "tags",
  //   description:
  //     "Tags associated with the spell (e.g. 'melee', 'ranged', 'heal', 'buff'...)",
  //   required: false,
  //   enum: SPELL_TAGS,
  //   isArray: true,
  // })
  @Get()
  @UsePipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      transform: true,
      whitelist: true,
    })
  )
  findAll(@Query() filter: FilterTalentFeatDto) {
    return this.talentFeatService.findAll(filter);
  }

  @ApiOperation({
    summary: "Reseed the database with talents and feats",
    description:
      "This endpoint deletes all talents and feats in the database and replaces them with the ones provided from the request body.",
  })
  @ApiResponse({
    status: 201,
    description: "The newly created talents and feats",
    isArray: true,
    type: TalentFeat,
  })
  @ApiHeader({
    name: API_KEY_HEADER,
    description: `A valid API key provided by this API's maintainer`,
    required: true,
  })
  @ApiBody({
    type: CreateTalentFeatDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: `The API key is missing or invalid`,
  })
  @PostGuard()
  @UsePipes(new ValidationPipe({ transform: true }))
  seedBulk(
    @Body(new ParseArrayPipe({ items: CreateTalentFeatDto }))
    createSpellDtos: CreateTalentFeatDto[]
  ) {
    return this.talentFeatService.seedBulk(createSpellDtos);
  }
}

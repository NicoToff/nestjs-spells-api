import {
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
  Query,
  Body,
  ParseArrayPipe,
  HttpException,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBody,
  ApiHeader,
} from "@nestjs/swagger";

import { SpellsService } from "./spells.service";

import { Spell } from "./schemas/spell.schema";
import { FilterSpellDto } from "./schemas/filter-spell.dto";

import { CreateSpellDto } from "./entities/create-spell.dto";

import {
  API_KEY_HEADER,
  ApiTagsEnum,
  RoutePathPrefixEnum,
} from "../../lib/constants";
import { PostGuard } from "../../lib/decorators/post-with-guard";

import {
  COMPONENTS,
  GROUPS,
  SCHOOLS,
  SOURCES,
  SPELL_LEVELS,
  DAMAGE_TYPES,
  SPELL_TAGS,
  ABILITY_SCORES,
} from "dnd-home-utils";

@ApiTags(ApiTagsEnum.Spells)
@Controller(RoutePathPrefixEnum.spells)
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @ApiOperation({
    summary: "Get all spells that match query",
    description:
      "This endpoint returns all homebrewed spells in the database. You can filter the results by setting various query parameters. If no spells match the query, an empty array is returned.",
  })
  @ApiResponse({
    status: 200,
    description: "The requested spell(s)",
    isArray: true,
    type: Spell,
  })
  @ApiQuery({
    name: "name",
    description: "Strings of characters that the spell name must contain",
    required: false,
    example: "fire",
    type: String,
  })
  @ApiQuery({
    name: "level",
    description: "The exact level of the spells (0 to 9, cantrip is 0)",
    required: false,
    enum: SPELL_LEVELS.map(String),
  })
  @ApiQuery({
    name: "school",
    description: "The school of the spell",
    required: false,
    enum: SCHOOLS,
  })
  @ApiQuery({
    name: "components",
    description: "The components of the spell",
    required: false,
    enum: COMPONENTS,
    isArray: true,
  })
  @ApiQuery({
    name: "group",
    description: "The group the spell might belong to",
    required: false,
    enum: GROUPS,
  })
  @ApiQuery({
    name: "sources",
    description: "One of the source a spell can belong to",
    required: false,
    enum: SOURCES,
    isArray: true,
  })
  @ApiQuery({
    name: "concentration",
    description: "Whether the spell requires concentration",
    required: false,
    enum: ["true", "false"],
  })
  @ApiQuery({
    name: "ritual",
    description: "Whether the spell can be cast as a ritual",
    required: false,
    enum: ["true", "false"],
  })
  @ApiQuery({
    name: "damageTypes",
    description: "The damage types of the spell",
    required: false,
    enum: DAMAGE_TYPES,
    isArray: true,
  })
  @ApiQuery({
    name: "tags",
    description:
      "Tags associated with the spell (e.g. 'melee', 'ranged', 'heal', 'buff'...)",
    required: false,
    enum: SPELL_TAGS,
    isArray: true,
  })
  @ApiQuery({
    name: "savingThrow",
    description: "The main Saving Throw of the spell (if any)",
    required: false,
    enum: ABILITY_SCORES,
  })
  @Get()
  @UsePipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      transform: true,
      whitelist: true,
    })
  )
  findAll(@Query() filter: FilterSpellDto) {
    return this.spellsService
      .findAll(filter)
      .then((spells) => spells.sort(sortBySpellFullName));
  }

  @ApiOperation({
    summary: "Finds a spell by its slug",
    description:
      "This endpoint returns a spell by its slug. If no spell matches the slug, a no-content response is returned.",
  })
  @ApiResponse({
    status: 200,
    description: "The requested spell",
    type: Spell,
  })
  @ApiResponse({
    status: 204,
    description: "No spell matches the slug",
  })
  @ApiQuery({
    name: "slug",
    description: "The slug of the spell",
    required: true,
    type: String,
  })
  @Get("slug")
  @UsePipes(new ValidationPipe({ transform: true }))
  async findBySlug(@Query("slug") slug: string) {
    const spell = await this.spellsService.findBySlug(slug);
    if (!spell) {
      throw new HttpException("No Content - No spell matches the slug", 204);
    }
    return spell;
  }

  @ApiOperation({
    summary: "Reseed the database with spells",
    description:
      "This endpoint deletes all spells in the database and replaces them with the ones provided from the request body.",
  })
  @ApiResponse({
    status: 201,
    description: "The newly created spells",
    isArray: true,
    type: Spell,
  })
  @ApiHeader({
    name: API_KEY_HEADER,
    description: `A valid API key provided by this API's maintainer`,
    required: true,
  })
  @ApiBody({
    type: CreateSpellDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: `The API key is missing or invalid`,
  })
  @PostGuard()
  @UsePipes(new ValidationPipe({ transform: true }))
  seedBulk(
    @Body(new ParseArrayPipe({ items: CreateSpellDto }))
    createSpellDtos: CreateSpellDto[]
  ) {
    return this.spellsService.seedBulk(createSpellDtos);
  }
}

function sortBySpellFullName(s1: Spell, s2: Spell) {
  const aFullName = `${s1.group}${s1.name}`;
  const bFullName = `${s2.group}${s2.name}`;
  return aFullName.localeCompare(bFullName);
}

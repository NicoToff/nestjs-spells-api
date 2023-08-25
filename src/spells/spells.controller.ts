import {
  Controller,
  Get,
  Param,
  Body,
  applyDecorators,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiResponse,
  ApiResponseMetadata,
} from "@nestjs/swagger";
import { SpellsService, type SpellSimplified } from "./spells.service";

import { Spell } from "./entities/spell.entity";
import { CreateSpellDto } from "./entities/create-spell.dto";

import { SPELL_DATA } from "./data/spell-data";
import { SOURCES } from "../sources/entities/source.type";
import { SCHOOLS } from "../schools/entities/school.type";
import { GROUPS } from "../groups/entities/group.type";

import { ApiTagsEnum, RoutePathPrefixEnum } from "../../lib/constants";
import { ApiPostOperationResponse } from "../../lib/decorators/api-swagger-bundled-decorators";
import { PostGuard } from "../../lib/decorators/post-with-guard";
import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { slugify } from "../../lib/slugify";

@ApiTags(ApiTagsEnum.Spells)
@Controller(RoutePathPrefixEnum.spells)
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @ApiOperation({
    summary: "Get all spells",
    description: "This endpoint returns all homebrewed spells in the database.",
  })
  @Get()
  @ApiResponse200({ isArray: true })
  findAll() {
    return this.spellsService.findAll();
  }

  @ApiOperation({
    summary: "Get a single spell",
    description:
      "This endpoint returns a single spell, referenced by its slug (slugs are used as IDs in the database).",
  })
  @Get(":spellSlug")
  @ApiParam({
    name: "spellSlug",
    description: "The slug of the spell to return",
    example: "fireball",
    enum: SPELL_DATA.map(({ name }) => slugify(name)),
  })
  @ApiMethodDecoratorsForArrays()
  async findOne(@Param("spellSlug") spellSlug: string) {
    return returnOrThrowIfNoContent(
      await this.spellsService.findOne(spellSlug),
      `No spell was found for slug "${spellSlug}"`
    );
  }

  @ApiOperation({
    summary: "Get spells from a given source",
    description:
      "This endpoint returns all spells from a given source, referenced by the source's slug (slugs are used as IDs in the database).",
  })
  @Get("source/:sourceSlug")
  @ApiParam({
    name: "sourceSlug",
    description: "The slug of the source to look for",
    example: "arcane",
    enum: SOURCES.map(slugify),
  })
  @ApiMethodDecoratorsForArrays()
  async findBySource(@Param("sourceSlug") sourceSlug: string) {
    return returnOrThrowIfNoContent<Spell[] | SpellSimplified[]>(
      await this.spellsService.findBySource(sourceSlug),
      `No spell was found for source with slug "${sourceSlug}"`
    );
  }

  @ApiOperation({
    summary: "Get spells from a given school",
    description:
      "This endpoint returns all spells from a given school, referenced by the school's slug (slugs are used as IDs in the database).",
  })
  @Get("school/:schoolSlug")
  @ApiParam({
    name: "schoolSlug",
    description: "The slug of the school to look for",
    example: "abjuration",
    enum: SCHOOLS.map(slugify),
  })
  @ApiMethodDecoratorsForArrays()
  async findBySchool(@Param("schoolSlug") schoolSlug: string) {
    return returnOrThrowIfNoContent<Spell[] | SpellSimplified[]>(
      await this.spellsService.findBySchool(schoolSlug),
      `No spell was found for school with slug "${schoolSlug}"`
    );
  }

  @ApiOperation({
    summary: "Get spells from a given group",
    description:
      "This endpoint returns all spells from a given group, referenced by the group's slug (slugs are used as IDs in the database).",
  })
  @Get("group/:groupSlug")
  @ApiParam({
    name: "groupSlug",
    description: "The slug of the group to look for",
    example: "elemental-torrents",
    enum: GROUPS.map(slugify),
  })
  @ApiMethodDecoratorsForArrays()
  async findByGroup(@Param("groupSlug") groupSlug: string) {
    return returnOrThrowIfNoContent<Spell[] | SpellSimplified[]>(
      await this.spellsService.findByGroup(groupSlug),
      `No spell was found for group with slug "${groupSlug}"`
    );
  }

  @ApiPostOperationResponse("spell", Spell)
  @UsePipes(new ValidationPipe({ transform: true }))
  @PostGuard()
  create(@Body() createSpellDto: CreateSpellDto) {
    return this.spellsService.create(createSpellDto);
  }
}

/** Prefilled with `status: 200` and `description: "The requested spell(s)"` */
function ApiResponse200(apiResponseArgs?: ApiResponseMetadata) {
  return ApiResponse({
    status: 200,
    description: "The requested spell(s)",
    type: Spell,
    ...apiResponseArgs,
  });
}

/** Prefilled with `status: 404` and `description: "No content was found"` */
function ApiResponse404(apiResponseArgs?: ApiResponseMetadata) {
  return ApiResponse({
    status: 404,
    description: "No content was found",
    ...apiResponseArgs,
  });
}

/** Contains `ApiResponse200({ isArray: true })` and `ApiResponse404()` */
function ApiMethodDecoratorsForArrays() {
  return applyDecorators(ApiResponse200({ isArray: true }), ApiResponse404());
}

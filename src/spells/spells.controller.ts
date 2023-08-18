// TODO: Find out how to type schema
import { Controller, Get, Query, Param, applyDecorators } from "@nestjs/common";
import {
  ApiQuery,
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiResponse,
  ApiResponseMetadata,
} from "@nestjs/swagger";
import { SpellsService, type SpellSimplified } from "./spells.service";
import { QueryBooleanPipe } from "../../lib/pipes/query-boolean.pipe";
import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";

import { Spell } from "./entities/spell.entity";

@ApiTags("Spells")
@Controller("spells")
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @ApiOperation({
    summary: "Get all spells",
    description: "This endpoint returns all homebrewed spells in the database.",
  })
  @Get()
  @ApiQuerySimpleRelations()
  @ApiResponse200()
  findAll(
    @Query("simpleRelations", QueryBooleanPipe)
    simpleRelations: boolean = false
  ) {
    return this.spellsService.findAll(simpleRelations);
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
  })
  @ApiMethodDecoratorsForArrays()
  async findOne(
    @Param("spellSlug") spellSlug: string,
    @Query("simpleRelations", QueryBooleanPipe) simpleRelations: boolean = false
  ) {
    return returnOrThrowIfNoContent(
      await this.spellsService.findOne(spellSlug, simpleRelations),
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
  })
  @ApiMethodDecoratorsForArrays()
  async findBySource(
    @Param("sourceSlug") sourceSlug: string,
    @Query("simpleRelations", QueryBooleanPipe) simpleRelations: boolean = false
  ) {
    return returnOrThrowIfNoContent<Spell[] | SpellSimplified[]>(
      await this.spellsService.findBySource(sourceSlug, simpleRelations),
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
  })
  @ApiMethodDecoratorsForArrays()
  async findBySchool(
    @Param("schoolSlug") schoolSlug: string,
    @Query("simpleRelations", QueryBooleanPipe) simpleRelations: boolean = false
  ) {
    return returnOrThrowIfNoContent<Spell[] | SpellSimplified[]>(
      await this.spellsService.findBySchool(schoolSlug, simpleRelations),
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
  })
  @ApiMethodDecoratorsForArrays()
  async findByGroup(
    @Param("groupSlug") groupSlug: string,
    @Query("simpleRelations", QueryBooleanPipe) simpleRelations: boolean = false
  ) {
    return returnOrThrowIfNoContent<Spell[] | SpellSimplified[]>(
      await this.spellsService.findByGroup(groupSlug, simpleRelations),
      `No spell was found for group with slug "${groupSlug}"`
    );
  }
}

/** All doc data to explain the `simpleRelations` query parameter */
function ApiQuerySimpleRelations() {
  return ApiQuery({
    name: "simpleRelations",
    required: false,
    description:
      "Make relation data easier to consume by returning only the `name` property value of the relation or an array of those values.",
    example:
      "`school: {slug: 'abjuration', name: 'Abjuration'}` will become `school: 'Abjuration'`",
  });
}

/** Prefilled with `status: 200` and `description: "The requested spell(s)"` */
function ApiResponse200(apiResponseArgs?: ApiResponseMetadata) {
  return ApiResponse({
    status: 200,
    description: "The requested spell(s)",
    // type: apiResponseArgs?.isArray ? [Spell] : Spell,
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

/** Contains `ApiQuerySimpleRelations()`, `ApiResponse200({ isArray: true })` and `ApiResponse404()` */
function ApiMethodDecoratorsForArrays() {
  return applyDecorators(
    ApiQuerySimpleRelations(),
    ApiResponse200({ isArray: true }),
    ApiResponse404()
  );
}

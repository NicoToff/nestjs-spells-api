import { Controller, Get, Query, Param } from "@nestjs/common";
import { SpellsService } from "./spells.service";
import {
  ApiQuery,
  type ApiQueryOptions,
  ApiParam,
  ApiOperation,
} from "@nestjs/swagger";

const simpleRelationsOptions = {
  name: "simpleRelations",
  required: false,
  description:
    "Make relation data easier to consume by returning only the `name` property value of the relation or an array of those values.",
  example:
    "`school: {slug: 'abjuration', name: 'Abjuration'}` will become `school: 'Abjuration'`",
} as const satisfies ApiQueryOptions;

@Controller("spells")
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @ApiOperation({
    summary: "Get all spells",
    description: "This endpoint returns all homebrewed spells in the database.",
  })
  @Get()
  @ApiQuery(simpleRelationsOptions)
  findAll(
    @Query("simpleRelations")
    simpleRelations: boolean = false
  ) {
    return this.spellsService.findAll(simpleRelations);
  }

  @ApiOperation({
    summary: "Get a single spell",
    description:
      "This endpoint returns a single spell, referenced by its slug (slugs are used as ID in the database). If the spell is not found, null is returned.",
  })
  @Get(":slug")
  @ApiQuery(simpleRelationsOptions)
  @ApiParam({
    name: "slug",
    description: "The slug of the spell to return",
  })
  findOne(
    @Param("slug") slug: string,
    @Query("simpleRelations") simpleRelations: boolean = false
  ) {
    return this.spellsService.findOne(slug, simpleRelations);
  }

  @ApiOperation({
    summary: "Get spells from a given school",
    description:
      "This endpoint returns all spells from a given school, referenced by the school's slug (slugs are used as ID in the database). If the school is not found, null is returned.",
  })
  @Get("source/:source")
  @ApiQuery(simpleRelationsOptions)
  @ApiParam({
    name: "sourceSlug",
    description: "The slug of the source to look for",
    example: "'arcane', 'primal', 'wizard'...",
  })
  findBySource(
    @Param("sourceSlug") source: string,
    @Query("simpleRelations") simpleRelations: boolean = false
  ) {
    return this.spellsService.findBySource(source, simpleRelations);
  }
}

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
  @Get(":spellSlug")
  @ApiQuery(simpleRelationsOptions)
  @ApiParam({
    name: "spellSlug",
    description: "The slug of the spell to return",
  })
  findOne(
    @Param("spellSlug") spellSlug: string,
    @Query("simpleRelations") simpleRelations: boolean = false
  ) {
    return this.spellsService.findOne(spellSlug, simpleRelations);
  }

  @ApiOperation({
    summary: "Get spells from a given source",
    description:
      "This endpoint returns all spells from a given source, referenced by the source's slug (slugs are used as ID in the database). If the source is not found, null is returned.",
  })
  @Get("source/:sourceSlug")
  @ApiQuery(simpleRelationsOptions)
  @ApiParam({
    name: "sourceSlug",
    description: "The slug of the source to look for",
    example: "arcane",
  })
  findBySource(
    @Param("sourceSlug") sourceSlug: string,
    @Query("simpleRelations") simpleRelations: boolean = false
  ) {
    return this.spellsService.findBySource(sourceSlug, simpleRelations);
  }

  @ApiOperation({
    summary: "Get spells from a given school",
    description:
      "This endpoint returns all spells from a given school, referenced by the school's slug (slugs are used as ID in the database). If the school is not found, an empty array is returned.",
  })
  @Get("school/:schoolSlug")
  @ApiQuery(simpleRelationsOptions)
  @ApiParam({
    name: "schoolSlug",
    description: "The slug of the school to look for",
    example: "abjuration",
  })
  findBySchool(
    @Param("schoolSlug") schoolSlug: string,
    @Query("simpleRelations") simpleRelations: boolean = false
  ) {
    return this.spellsService.findBySchool(schoolSlug, simpleRelations);
  }

  @ApiOperation({
    summary: "Get spells from a given group",
    description:
      "This endpoint returns all spells from a given group, referenced by the group's slug (slugs are used as ID in the database). If the group is not found, an empty array is returned.",
  })
  @Get("group/:groupSlug")
  @ApiQuery(simpleRelationsOptions)
  @ApiParam({
    name: "groupSlug",
    description: "The slug of the group to look for",
    example: "elemental-torrents",
  })
  findByGroup(
    @Param("groupSlug") groupSlug: string,
    @Query("simpleRelations") simpleRelations: boolean = false
  ) {
    return this.spellsService.findByGroup(groupSlug, simpleRelations);
  }
}

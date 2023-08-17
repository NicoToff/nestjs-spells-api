import { Controller, Get, Query, Param } from "@nestjs/common";
import { SpellsService } from "./spells.service";
import { ApiQuery, ApiOperation } from "@nestjs/swagger";

const simplifyRelationsOptions = {
  name: "simplifyRelations",
  required: false,
  description:
    "Make relation data easier to consume by returning only the `name` property value of the relation or an array of those values.",
  example:
    "school: {slug: 'abjuration', name: 'Abjuration'} will become school: 'Abjuration'",
} as const;

@Controller("spells")
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @ApiOperation({
    summary: "Get all spells",
    description: "This endpoint returns all homebrewed spells in the database.",
  })
  @Get()
  @ApiQuery(simplifyRelationsOptions)
  findAll(
    @Query("simplifyRelations")
    simplifyRelations: boolean = false
  ) {
    return this.spellsService.findAll(simplifyRelations);
  }

  @ApiOperation({
    summary: "Get a single spell",
    description:
      "This endpoint returns a single spell, referenced by its slug (slugs are used as ID in the database). If the spell is not found, null is returned.",
  })
  @Get(":slug")
  @ApiQuery(simplifyRelationsOptions)
  findOne(
    @Param("slug") slug: string,
    @Query("simplifyRelations") simplifyRelations: boolean = false
  ) {
    return this.spellsService.findOne(slug, simplifyRelations);
  }

  @ApiOperation({
    summary: "Get spells from a given school",
    description:
      "This endpoint returns all spells from a given school, referenced by the school's slug (slugs are used as ID in the database). If the school is not found, null is returned.",
  })
  @Get("source/:source")
  @ApiQuery(simplifyRelationsOptions)
  findBySource(
    @Param("source") source: string,
    @Query("simplifyRelations") simplifyRelations: boolean = false
  ) {
    return this.spellsService.findBySource(source, simplifyRelations);
  }
}

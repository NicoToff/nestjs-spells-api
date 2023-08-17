import { Controller, Get, Query, Param } from "@nestjs/common";
import { SpellsService } from "./spells.service";
import { ApiQuery, ApiOperation } from "@nestjs/swagger";

const simplifyRelationsOptions = {
  name: "simplifyRelations",
  required: false,
  description:
    "Make relation data easy to consume by returning only the name property of the relation or an array of them.",
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
  async findAll(
    @Query("simplifyRelations")
    simplifyRelations: boolean = false
  ) {
    const findAllSpells = await this.spellsService.findAll();
    if (simplifyRelations) {
      return this.spellsService.flattenSpellArray(findAllSpells);
    }
    return findAllSpells;
  }

  @ApiOperation({
    summary: "Get a single spell",
    description:
      "This endpoint returns a single spell, referenced by its slug (slugs are used as ID in the database). If the spell is not found, it returns null.",
  })
  @Get(":slug")
  @ApiQuery(simplifyRelationsOptions)
  async findOne(
    @Param("slug") slug: string,
    @Query("simplifyRelations") simplifyRelations: boolean = false
  ) {
    const findOneSpell = await this.spellsService.findOne(slug);
    if (simplifyRelations && findOneSpell) {
      return this.spellsService.flattenSpell(findOneSpell);
    }
    return findOneSpell;
  }

  @Get("source/:source")
  @ApiQuery(simplifyRelationsOptions)
  async findBySource(
    @Param("source") source: string,
    @Query("simplifyRelations") simplifyRelations: boolean = false
  ) {
    const findSpellsBySource = await this.spellsService.findBySource(source);
    if (simplifyRelations) {
      return this.spellsService.flattenSpellArray(findSpellsBySource);
    }
    return findSpellsBySource;
  }
}

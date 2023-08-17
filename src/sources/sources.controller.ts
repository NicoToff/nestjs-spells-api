import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation } from "@nestjs/swagger";

import { SourcesService } from "./sources.service";

@ApiTags("Spell relation datails")
@Controller("sources")
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @ApiOperation({
    summary: "Get all sources",
    description: "This endpoint returns all spell sources in the database.",
  })
  @Get()
  findAll() {
    return this.sourcesService.findAll();
  }

  @ApiOperation({
    summary: "Get a single source",
    description:
      "This endpoint returns a single spell source, referenced by its slug (slugs are used as ID in the database). If the source is not found, null is returned.",
  })
  @ApiParam({
    name: "slug",
    description: "The slug of the source to return",
    example: "arcane",
  })
  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.sourcesService.findOne(slug);
  }
}

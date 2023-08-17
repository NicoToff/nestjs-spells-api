import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation } from "@nestjs/swagger";

import { SchoolsService } from "./schools.service";

@ApiTags("Spell relation datails")
@Controller("schools")
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @ApiOperation({
    summary: "Get all schools",
    description: "This endpoint returns all spell schools in the database.",
  })
  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @ApiOperation({
    summary: "Get a single school",
    description:
      "This endpoint returns a single spell school, referenced by its slug (slugs are used as ID in the database). If the school is not found, null is returned.",
  })
  @ApiParam({
    name: "slug",
    description: "The slug of the school to return",
    example: "abjuration",
  })
  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.schoolsService.findOne(slug);
  }
}

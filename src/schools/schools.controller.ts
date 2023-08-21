import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { SchoolsService } from "./schools.service";
import { School } from "./entities/school.entity";
import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum } from "../../lib/constants";

@ApiTags(ApiTagsEnum.SpellRelationDetails)
@Controller("schools")
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @ApiOperation({
    summary: "Get all schools",
    description: "This endpoint returns all spell schools in the database.",
  })
  @Get()
  @ApiResponse({
    status: 200,
    description: "The list of all spell schools",
    type: [School],
  })
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
  @ApiResponse({
    status: 200,
    description: "The school with the given slug",
    type: School,
  })
  @ApiResponse({
    status: 404,
    description: "No school was found for the given slug",
  })
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      this.schoolsService.findOne(slug),
      `No school was found for slug "${slug}"`
    );
  }
}

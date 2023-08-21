import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { SourcesService } from "./sources.service";
import { Source } from "./entities/source.entity";
import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum } from "../../lib/constants";
import { CreateSourceDto } from "./entities/source.dto";

@ApiTags(ApiTagsEnum.SpellRelationDetails)
@Controller("sources")
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @ApiOperation({
    summary: "Get all sources",
    description: "This endpoint returns all spell sources in the database.",
  })
  @ApiResponse({
    status: 200,
    description: "The list of all spell sources",
    type: [Source],
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
  @ApiResponse({
    status: 200,
    description: "The source with the given slug",
    type: Source,
  })
  @ApiResponse({
    status: 404,
    description: "No source was found for the given slug",
  })
  @Get(":slug")
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      await this.sourcesService.findOne(slug),
      `No source was found for slug "${slug}"`
    );
  }

  @ApiOperation({
    summary: "Create a new source",
    description:
      "This endpoint creates a new spell source. The source is created with the given name, and a slug is automatically generated from it. The source name must be unique.",
  })
  @ApiResponse({
    status: 201,
    description: "The created source",
    type: Source,
  })
  @ApiResponse({
    status: 409,
    description: "A source with the given name already exists",
  })
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createSourceDto: CreateSourceDto) {
    return this.sourcesService.create(createSourceDto);
  }
}

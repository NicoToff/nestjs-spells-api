import {
  Controller,
  Get,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Source } from "./entities/source.entity";
import { SourcesService } from "./sources.service";
import { CreateSourceDto } from "./entities/source.dto";

import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum, RoutePathPrefixEnum } from "../../lib/constants";
import {
  ApiGetAllOperationBundle,
  ApiGetBySlugOperationBundle,
  ApiPostOperationResponse,
} from "../../lib/decorators/api-swagger-bundled-decorators";
import { PostGuard } from "../../lib/decorators/post-with-guard";

@ApiTags(ApiTagsEnum.SpellRelationDetails)
@Controller(RoutePathPrefixEnum.sources)
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @ApiGetAllOperationBundle({
    entity: "spell source",
    type: Source,
  })
  @Get()
  findAll() {
    return this.sourcesService.findAll();
  }

  @ApiGetBySlugOperationBundle({
    entity: "spell source",
    type: Source,
    paramExample: "arcane",
  })
  @Get(":slug")
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      await this.sourcesService.findOne(slug),
      `No source was found for slug "${slug}"`
    );
  }

  @ApiPostOperationResponse("source", Source)
  @PostGuard()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createSourceDto: CreateSourceDto) {
    return this.sourcesService.create(createSourceDto);
  }
}

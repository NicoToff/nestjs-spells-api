import {
  Controller,
  Get,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { School } from "./entities/school.entity";
import { SCHOOLS } from "./entities/school.type";
import { SchoolsService } from "./schools.service";
import { CreateSchoolDto } from "./entities/school.dto";

import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum, RoutePathPrefixEnum } from "../../lib/constants";
import {
  ApiGetAllOperationBundle,
  ApiGetBySlugOperationBundle,
  ApiPostOperationResponse,
} from "../../lib/decorators/api-swagger-bundled-decorators";
import { PostGuard } from "../../lib/decorators/post-with-guard";
import { slugify } from "../../lib/slugify";

@ApiTags(ApiTagsEnum.SpellRelationDetails)
@Controller(RoutePathPrefixEnum.schools)
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @ApiGetAllOperationBundle({
    entity: "spell school",
    type: School,
  })
  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @ApiGetBySlugOperationBundle({
    entity: "spell school",
    type: School,
    paramExample: "evocation",
    enum: SCHOOLS.map(slugify),
  })
  @Get(":slug")
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      this.schoolsService.findOne(slug),
      `No school was found for slug "${slug}"`
    );
  }

  @ApiPostOperationResponse("school", School)
  @PostGuard()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { School } from "./entities/school.entity";
import { SchoolsService } from "./schools.service";
import { CreateSchoolDto } from "./entities/school.dto";

import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum, RoutePathPrefixEnum } from "../../lib/constants";
import {
  ApiGetAllOperationBundle,
  ApiGetBySlugOperationBundle,
  ApiPostOperationResponse,
} from "../../lib/decorators/api-swagger-bundled-decorators";

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
  })
  @Get(":slug")
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      this.schoolsService.findOne(slug),
      `No school was found for slug "${slug}"`
    );
  }

  @ApiPostOperationResponse("school", School)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }
}

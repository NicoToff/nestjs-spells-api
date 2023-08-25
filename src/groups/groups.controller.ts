import {
  Controller,
  Get,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Group } from "./entities/group.entity";
import { GROUPS } from "./entities/group.type";
import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./entities/group.dto";

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
@Controller(RoutePathPrefixEnum.groups)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiGetAllOperationBundle({
    entity: "spell group",
    type: Group,
  })
  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @ApiGetBySlugOperationBundle({
    entity: "spell group",
    type: Group,
    paramExample: "elemental-torrents",
    enum: GROUPS.map(slugify),
  })
  @Get(":slug")
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      await this.groupsService.findOne(slug),
      `No group was found for slug "${slug}"`
    );
  }

  @ApiPostOperationResponse("group", Group)
  @UsePipes(new ValidationPipe({ transform: true }))
  @PostGuard()
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }
}

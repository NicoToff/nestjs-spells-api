import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Group } from "./entities/group.entity";
import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./entities/group.dto";

import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum, RoutePathPrefixEnum } from "../../lib/constants";
import {
  ApiGetAllOperationBundle,
  ApiGetBySlugOperationBundle,
  ApiPostOperationResponse,
} from "../../lib/decorators/api-swagger-bundled-decorators";

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
  })
  @Get(":slug")
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      await this.groupsService.findOne(slug),
      `No group was found for slug "${slug}"`
    );
  }

  @ApiPostOperationResponse("group", Group)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }
}

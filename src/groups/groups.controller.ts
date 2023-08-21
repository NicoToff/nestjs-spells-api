import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { GroupsService } from "./groups.service";
import { Group } from "./entities/group.entity";
import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";
import { ApiTagsEnum } from "../../lib/constants";
import { CreateGroupDto } from "./entities/group.dto";

@ApiTags(ApiTagsEnum.SpellRelationDetails)
@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiOperation({
    summary: "Get all groups",
    description: "This endpoint returns all spell groups in the database.",
  })
  @Get()
  @ApiResponse({
    status: 200,
    description: "The list of all spell groups",
    type: [Group],
  })
  findAll() {
    return this.groupsService.findAll();
  }

  @ApiOperation({
    summary: "Get a single group",
    description:
      "This endpoint returns a single spell group, referenced by its slug (slugs are used as ID in the database). If the group is not found, null is returned.",
  })
  @ApiParam({
    name: "slug",
    description: "The slug of the group to return",
    example: "elemental-torrents",
  })
  @Get(":slug")
  @ApiResponse({
    status: 200,
    description: "The group with the given slug",
    type: Group,
  })
  @ApiResponse({
    status: 404,
    description: "No group was found for the given slug",
  })
  async findOne(@Param("slug") slug: string) {
    return returnOrThrowIfNoContent(
      await this.groupsService.findOne(slug),
      `No group was found for slug "${slug}"`
    );
  }

  @ApiOperation({
    summary: "Create a new group",
    description:
      "This endpoint creates a new spell group. The group is created with the given name, and a slug is automatically generated from it. The group name must be unique.",
  })
  @Post()
  @ApiResponse({
    status: 201,
    description: "The newly created group",
    type: Group,
  })
  @ApiResponse({
    status: 409,
    description: "A group with the given name already exists",
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }
}

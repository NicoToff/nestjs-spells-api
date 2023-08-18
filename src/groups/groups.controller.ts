import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { GroupsService } from "./groups.service";
import { Group } from "./entities/group.entity";
import { returnOrThrowIfNoContent } from "../../lib/returnOrThrow";

@ApiTags("Spell relation datails")
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
}

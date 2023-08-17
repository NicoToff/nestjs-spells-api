import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOperation } from "@nestjs/swagger";

import { GroupsService } from "./groups.service";

@ApiTags("Spell relation datails")
@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiOperation({
    summary: "Get all groups",
    description: "This endpoint returns all spell groups in the database.",
  })
  @Get()
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
  findOne(@Param("slug") slug: string) {
    return this.groupsService.findOne(slug);
  }
}

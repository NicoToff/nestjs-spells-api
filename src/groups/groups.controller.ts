import { Controller, Get, Param } from "@nestjs/common";
import { GroupsService } from "./groups.service";

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.groupsService.findOne(slug);
  }
}

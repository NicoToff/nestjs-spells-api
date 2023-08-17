import { Controller, Get, Param } from "@nestjs/common";
import { SchoolsService } from "./schools.service";

@Controller("schools")
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.schoolsService.findOne(slug);
  }
}

import { Controller, Get, Param } from "@nestjs/common";
import { SourcesService } from "./sources.service";

@Controller("sources")
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Get()
  findAll() {
    return this.sourcesService.findAll();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.sourcesService.findOne(slug);
  }
}

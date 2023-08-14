import { Controller, Get, Param } from "@nestjs/common";
import { SpellsService } from "./spells.service";

@Controller("spells")
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  findAll() {
    return this.spellsService.findAll();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.spellsService.findOne(slug);
  }

  @Get("init-mockup")
  initMockup() {
    return this.spellsService.initMockup();
  }
}

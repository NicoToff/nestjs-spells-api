import { Controller, Get, Param } from "@nestjs/common";
import { SpellsService } from "./spells.service";

@Controller("spells")
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  findAll() {
    return this.spellsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.spellsService.findOne(+id);
  }
}

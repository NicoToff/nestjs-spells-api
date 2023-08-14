import { Test, TestingModule } from "@nestjs/testing";
import { SpellsController } from "./spells.controller";
import { SpellsService } from "./spells.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Spell } from "./entities/spell.entity";

describe("SpellsController", () => {
  let controller: SpellsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpellsController],
      providers: [
        SpellsService,
        {
          provide: getRepositoryToken(Spell),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<SpellsController>(SpellsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

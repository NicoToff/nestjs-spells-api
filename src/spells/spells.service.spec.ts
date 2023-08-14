import { Test, TestingModule } from "@nestjs/testing";
import { SpellsService } from "./spells.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Spell } from "./entities/spell.entity";

describe("SpellsService", () => {
  let service: SpellsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpellsService,
        {
          provide: getRepositoryToken(Spell),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<SpellsService>(SpellsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

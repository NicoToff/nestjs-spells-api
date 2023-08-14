import { Test, TestingModule } from "@nestjs/testing";
import { SpellsService } from "./spells.service";

describe("SpellsService", () => {
  let service: SpellsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpellsService],
    }).compile();

    service = module.get<SpellsService>(SpellsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from "@nestjs/testing";
import { SourcesService } from "./schools.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Source } from "./entities/school.entity";

describe("SourcesService", () => {
  let service: SourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SourcesService,
        {
          provide: getRepositoryToken(Source),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<SourcesService>(SourcesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

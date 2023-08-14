import { Test, TestingModule } from "@nestjs/testing";
import { SourcesController } from "./sources.controller";
import { SourcesService } from "./sources.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Source } from "./entities/source.entity";

describe("SourcesController", () => {
  let controller: SourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SourcesController],
      providers: [
        SourcesService,
        {
          provide: getRepositoryToken(Source),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<SourcesController>(SourcesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

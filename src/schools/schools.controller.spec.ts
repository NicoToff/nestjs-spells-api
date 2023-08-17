import { Test, TestingModule } from "@nestjs/testing";
import { SchoolsController } from "./schools.controller";
import { SchoolsService } from "./schools.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { School } from "./entities/school.entity";

describe("SchoolsController", () => {
  let controller: SchoolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolsController],
      providers: [
        SchoolsService,
        {
          provide: getRepositoryToken(School),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<SchoolsController>(SchoolsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

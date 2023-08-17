import { Test, TestingModule } from "@nestjs/testing";
import { GroupsController } from "./groups.controller";
import { GroupsService } from "./groups.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Group } from "./entities/group.entity";

describe("SchoolsController", () => {
  let controller: GroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsController],
      providers: [
        GroupsService,
        {
          provide: getRepositoryToken(Group),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    controller = module.get<GroupsController>(GroupsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

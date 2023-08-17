import { Test, TestingModule } from "@nestjs/testing";
import { GroupsService } from "./groups.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Group } from "./entities/group.entity";

describe("GroupsService", () => {
  let service: GroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        {
          provide: getRepositoryToken(Group),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

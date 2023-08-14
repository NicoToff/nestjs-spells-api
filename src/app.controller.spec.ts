import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Spell } from "./spells/entities/spell.entity";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Spell),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
  });
});

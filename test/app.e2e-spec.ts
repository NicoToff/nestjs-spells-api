import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { SPELL_DATA } from "../src/spells/data/spell-data";
import { Spell } from "../src/spells/entities/spell.entity";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/spells (GET)", () => {
    const allSpellNames = SPELL_DATA.map((s) => s.name);
    return request(app.getHttpServer())
      .get("/spells")
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBe(SPELL_DATA.length);
        res.body.forEach((spell: Spell) => {
          expect(allSpellNames.includes(spell.name)).toBe(true);
        });
      });
  });
});

import { Injectable } from "@nestjs/common";

@Injectable()
export class SpellsService {
  findAll() {
    return `This action returns all spells`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spell`;
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { School } from "./entities/school.entity";

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private schoolsRepository: Repository<School>
  ) {}

  findAll() {
    return this.schoolsRepository.find();
  }

  findOne(slug: string) {
    return this.schoolsRepository.findOne({
      where: {
        slug,
      },
    });
  }
}

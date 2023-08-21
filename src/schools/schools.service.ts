import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { School } from "./entities/school.entity";
import { CreateSchoolDto } from "./entities/school.dto";

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
      where: { slug },
    });
  }

  create(createSchoolDto: CreateSchoolDto) {
    Logger.verbose(
      `Creating school: ${createSchoolDto.name}`,
      "SchoolsService"
    );
    return this.schoolsRepository.save(new School(createSchoolDto.name));
  }
}

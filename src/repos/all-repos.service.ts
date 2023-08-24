import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Group } from "../groups/entities/group.entity";
import { School } from "../schools/entities/school.entity";
import { Source } from "../sources/entities/source.entity";

@Injectable()
export class AllReposService {
  constructor(
    @InjectRepository(Group)
    readonly groupsRepository: Repository<Group>,
    @InjectRepository(Source)
    readonly sourcesRepository: Repository<Source>,
    @InjectRepository(School)
    readonly schoolsRepository: Repository<School>
  ) {}

  getGroupRepository() {
    return this.groupsRepository;
  }

  getSourceRepository() {
    return this.sourcesRepository;
  }

  getSchoolRepository() {
    return this.schoolsRepository;
  }
}

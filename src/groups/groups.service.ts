import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Group } from "./entities/group.entity";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>
  ) {}

  findAll() {
    return this.groupsRepository.find();
  }

  findOne(slug: string) {
    return this.groupsRepository.findOne({
      where: { slug },
    });
  }
}

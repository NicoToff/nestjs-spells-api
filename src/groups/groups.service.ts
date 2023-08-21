import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Group } from "./entities/group.entity";
import { CreateGroupDto } from "./entities/group.dto";

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

  create(createGroupDto: CreateGroupDto) {
    Logger.verbose(`Creating group: ${createGroupDto.name}`, "GroupsService");
    return this.groupsRepository.save(new Group(createGroupDto.name));
  }
}

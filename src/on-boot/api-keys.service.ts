import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ApiKey } from "./entities/api-keys.entity";

@Injectable()
export class ApiKeyService implements OnModuleInit {
  constructor(
    @InjectRepository(ApiKey)
    readonly apiKeyRepository: Repository<ApiKey>
  ) {}

  async apiKeyExistsInDb(apiKey: string) {
    const apiKeyMaybe = await this.apiKeyRepository.findOne({
      where: { apiKey },
    });
    const isAuthed = apiKeyMaybe != null;
    !isAuthed && Logger.verbose("UNAUTHORIZED", "ApiKeyService");
    return isAuthed;
  }

  async onModuleInit() {
    const API_KEYS = process.env.API_KEYS?.split(",");
    if (!API_KEYS)
      throw new Error("API keys from environment could not be loaded!");

    // Clear the entire table ...
    await this.apiKeyRepository.clear();

    // ... and re-populate with found API keys from environment
    const apiKeys = API_KEYS.map((apiKey) => new ApiKey(apiKey));
    await this.apiKeyRepository.save(apiKeys);
    Logger.verbose("API keys saved to database from ENV", "ApiKeyService");
  }
}

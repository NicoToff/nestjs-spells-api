import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ApiKey {
  @PrimaryColumn()
  apiKey: string;

  constructor(data?: string) {
    if (!data) return;
    if (typeof data !== "string") throw new Error(`${data} is not a string`);
    this.apiKey = data;
  }
}

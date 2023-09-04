import { SPELL_DATA } from "../src/spells/data/spell-data";
import {
  API_KEY_HEADER,
  RoutePathPrefixEnum,
  type RoutePathPrefixType,
} from "../lib/constants";
import type { CreateSpellDto } from "../src/spells/entities/create-spell.dto";
import { getLineFromEnvFile } from "./src/api-keys";
import { join } from "path";

const PORT = 8000;
const args = process.argv.slice(2);

const basePath = !args.includes("prod")
  ? `http://0.0.0.0:${PORT}`
  : "https://nestjs-spells-api.fly.dev";

const post = async (
  data: CreateSpellDto[],
  href: RoutePathPrefixType,
  apiKey?: string
) => {
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json",
    ...(apiKey ? { [API_KEY_HEADER]: apiKey } : {}),
  };

  const res = await fetch(`${basePath}/${href}`, {
    method: "POST",
    headers,
    body,
  });

  return res.json();
};

const seed = async () => {
  const apiKey = (
    await getLineFromEnvFile(join(process.cwd(), ".env"), "API_KEY")
  )
    ?.split("=")[1]
    ?.split(",")[0];
  const json = await post(SPELL_DATA, RoutePathPrefixEnum.spells, apiKey).catch(
    console.error
  );

  console.log(`${json.length} spells created or updated`);
  console.log(json);
  if (!apiKey) console.warn("No API key found in .env file");
};
seed();

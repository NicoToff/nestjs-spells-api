import { SOURCES } from "../src/sources/entities/source.type";
import { SCHOOLS } from "../src/schools/entities/school.type";
import { GROUPS } from "../src/groups/entities/group.type";
import { SPELL_DATA } from "../src/spells/data/spell-data";
import {
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
  data: CreateSpellDto | { name: string },
  href: RoutePathPrefixType,
  apiKey?: string
) => {
  const body = JSON.stringify(data);
  const res = await fetch(`${basePath}/${href}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(apiKey ? { "api-key": apiKey } : {}),
    },
    body,
  });
  return res.json();
};

const seedRelations = async () => {
  const apiKey = (
    await getLineFromEnvFile(join(process.cwd(), ".env"), "API_KEY")
  )
    ?.split("=")[1]
    ?.split(",")[0];
  await Promise.allSettled(
    SOURCES.map((source) =>
      post({ name: source }, RoutePathPrefixEnum.sources, apiKey).catch(
        console.error
      )
    )
  );
  await Promise.allSettled(
    SCHOOLS.map((school) =>
      post({ name: school }, RoutePathPrefixEnum.schools, apiKey).catch(
        console.error
      )
    )
  );
  await Promise.allSettled(
    GROUPS.map((group) =>
      post({ name: group }, RoutePathPrefixEnum.groups, apiKey).catch(
        console.error
      )
    )
  );
  const json = await Promise.allSettled(
    SPELL_DATA.map((spell) =>
      post(spell as CreateSpellDto, RoutePathPrefixEnum.spells, apiKey).catch(
        console.error
      )
    )
  );
  console.log(`${json.length} spells created or updated`);
  console.log(json);
  if (!apiKey) console.warn("No API key found in .env file");
};
seedRelations();

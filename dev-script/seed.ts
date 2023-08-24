import { SOURCES } from "../src/sources/entities/source.type";
import { SCHOOLS } from "../src/schools/entities/school.type";
import { GROUPS } from "../src/groups/entities/group.type";
import { SPELL_DATA } from "../lib/spell-data";
import { RoutePathPrefixEnum, type RoutePathPrefixType } from "lib/constants";
import type { CreateSpellDto } from "../src/spells/entities/create-spell.dto";

const PORT = 8000;
const args = process.argv.slice(2);

const basePath = !args.includes("prod")
  ? `http://0.0.0.0:${PORT}`
  : "https://nestjs-spells-api.fly.dev";

const send = async (
  data: CreateSpellDto | { name: string },
  href: RoutePathPrefixType
) => {
  const body = JSON.stringify(data);
  const res = await fetch(`${basePath}/${href}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  return res.json();
};

const seedRelations = async () => {
  await Promise.allSettled(
    SOURCES.map((source) =>
      send({ name: source }, RoutePathPrefixEnum.sources).catch(console.error)
    )
  );
  await Promise.allSettled(
    SCHOOLS.map((school) =>
      send({ name: school }, RoutePathPrefixEnum.schools).catch(console.error)
    )
  );
  await Promise.allSettled(
    GROUPS.map((group) =>
      send({ name: group }, RoutePathPrefixEnum.groups).catch(console.error)
    )
  );
  const json = await Promise.allSettled(
    SPELL_DATA.map((spell) =>
      send(spell as CreateSpellDto, RoutePathPrefixEnum.spells).catch(
        console.error
      )
    )
  );
  console.log(`${json.length} spells created or updated`);
  console.log(json);
};
seedRelations();

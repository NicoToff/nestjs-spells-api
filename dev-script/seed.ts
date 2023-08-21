import { SOURCES } from "../src/sources/entities/source.type";
import { SCHOOLS } from "../src/schools/entities/school.type";
import { GROUPS } from "../src/groups/entities/group.type";
import { SPELL_DATA } from "../lib/spell-data";
import type { CreateSpellDto } from "../src/spells/entities/create-spell.dto";
const PORT = 8000;
const args = process.argv.slice(2);

const basePath = args.includes("dev")
  ? `http://0.0.0.0:${PORT}`
  : "https://nestjs-spells-api.fly.dev";

const create = async (data: string | CreateSpellDto, href: string) => {
  const body =
    typeof data === "string"
      ? JSON.stringify({ name: data })
      : JSON.stringify(data);
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
      create(source, "sources").then(console.log).catch(console.error)
    )
  );
  await Promise.allSettled(
    SCHOOLS.map((school) =>
      create(school, "schools").then(console.log).catch(console.error)
    )
  );
  await Promise.allSettled(
    GROUPS.map((group) =>
      create(group, "groups").then(console.log).catch(console.error)
    )
  );
  const json = await Promise.allSettled(
    SPELL_DATA.map((spell) =>
      create(spell, "spells").then(console.log).catch(console.error)
    )
  );
  console.log(json);
};
seedRelations();

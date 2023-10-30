import { join } from "path";

import { SPELL_DATA } from "../src/spells/data/spell-data";
import { TALENT_DATA } from "../src/talent-feat/data/talents";
import { FEAT_DATA } from "../src/talent-feat/data/feat";

import {
  API_KEY_HEADER,
  RoutePathPrefixEnum,
  type RoutePathPrefixType,
} from "../lib/constants";

import { getLineFromEnvFile } from "./src/api-keys";
import { slugify } from "lib/slugify";

import type { CreateSpellDto } from "../src/spells/entities/create-spell.dto";
import type { CreateTalentFeatDto } from "../src/talent-feat/entities/create-talent-feat.dto";

const PORT = 8000;
const args = process.argv.slice(2);
const href = Object.values(RoutePathPrefixEnum).find((prefix) =>
  args.includes(prefix)
);

if (!href) {
  console.warn(
    `No route path prefix specified. Please specify one of the following: ${Object.values(
      RoutePathPrefixEnum
    ).join(", ")}`
  );
  process.exit(1);
}

const basePath = !args.includes("prod")
  ? `http://0.0.0.0:${PORT}`
  : "https://nestjs-spells-api.fly.dev";

const post = async (
  data: CreateSpellDto[] | CreateTalentFeatDto[],
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

const seed = async (href: RoutePathPrefixType) => {
  const apiKey = (
    await getLineFromEnvFile(join(process.cwd(), ".env"), "API_KEY")
  )
    ?.split("=")[1]
    ?.split(",")[0];
  const json = await post(mapContent(href), href, apiKey).catch(console.error);

  console.log(`${json.length} ${href} created or updated`);
  console.log(json);
  if (!apiKey) console.warn("No API key found in .env file");
};
seed(href);

function mapContent(href: RoutePathPrefixType) {
  switch (href) {
    case "spells":
      return SPELL_DATA.map((spell) => ({
        ...spell,
        slug: slugify(spell.name),
      }));
    case "talent-feat":
      return TALENT_DATA.concat(FEAT_DATA);
  }
}

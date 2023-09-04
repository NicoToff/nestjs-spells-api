import * as crypto from "crypto";
import { readFile, writeFile } from "fs/promises";
import { spawn } from "child_process";

export async function generateApiKeys(
  dotEnvPath: string,
  apiKeyLineStartsWith = "API_KEYS="
) {
  const args = process.argv.slice(2);
  const nbrFromArgs = Number(args.find((arg) => arg !== "--create-env")) || 5;
  const createEnv = args.includes("--create-env");
  const nbrOfKeys = range(nbrFromArgs, 1, 10000);

  apiKeyLineStartsWith = apiKeyLineStartsWith.endsWith("=")
    ? apiKeyLineStartsWith
    : apiKeyLineStartsWith + "=";

  console.log(`Generating ${nbrOfKeys} API keys...`);

  let newLines: string[] = [];
  if (!createEnv) {
    newLines = await getLinesFromEnvFile(dotEnvPath, [
      apiKeyLineStartsWith,
    ]).catch((e) => {
      throw new Error(
        `${e.message}
            No .env file was found, is this normal?
            If you wish to create a new .env file, pass the '--create-env' option to this script.`
      );
    });
  } else {
    console.log("Creating new .env file...");
  }

  const newApiKeys = Array.from({ length: nbrOfKeys }, () =>
    crypto.randomUUID({ disableEntropyCache: true })
  );

  const apiKeyLine = `${apiKeyLineStartsWith}${newApiKeys.join(",")}`;

  await writeFile(dotEnvPath, [...newLines, apiKeyLine].join("\n"));

  console.log("API keys generated successfully.");
}

export async function sendApiKeys(
  dotEnvPath: string,
  apiKeyLineStartsWith = "API_KEYS="
) {
  console.log("Retrieving API keys locally...");

  const API_KEYS = await getLineFromEnvFile(dotEnvPath, apiKeyLineStartsWith);

  if (!API_KEYS) throw new Error("API_KEYS not found in .env file");

  console.log("Setting API keys on hosting provider...");

  const fly = spawn("fly", ["secrets", "set", API_KEYS], {
    stdio: "inherit",
  });

  fly.on("close", (code) => {
    if (code === 0) {
      console.log("API keys set successfully.");
    } else {
      console.error("API keys not set, process exited with code: ", code);
    }
  });
}

export async function getLineFromEnvFile(filePath: string, starstWith: string) {
  return (await readFile(filePath))
    .toString()
    .split("\n")
    .find((line) => line.startsWith(starstWith));
}

export async function getLinesFromEnvFile(
  filePath: string,
  filterOut?: string[]
) {
  return (await readFile(filePath))
    .toString()
    .split("\n")
    .filter((line) => !filterOut?.some((filter) => line.startsWith(filter)));
}

function range(value: number, min: number, max: number) {
  return Math.floor(Math.max(Math.min(value, max), min));
}

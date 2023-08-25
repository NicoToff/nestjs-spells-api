import { sendApiKeys } from "./src/api-keys";
import { join } from "path";

const dotEnvPath = join(process.cwd(), ".env");

sendApiKeys(dotEnvPath);

import { spawn as _spawn, type SpawnOptions } from "child_process";

const imageName = "nestjs-spells-api-slim";
const containerName = "nestjs-slim";
const portMapping = "8000:8000";
const SUCCESS = 0;

// Starts the build of the Docker image
(function () {
  const buildImage = spawn("docker", ["build", "-t", imageName, "."]);

  buildImage.on("close", (code) => {
    continueOrExit({
      code,
      task: "build the image",
      next: removeContainer,
    });
  });
})();

// Remove the previous container
const removeContainer = () => {
  const removeContainer = spawn("docker", ["rm", "-f", containerName]);

  removeContainer.on("close", (code) => {
    continueOrExit({
      code,
      task: "remove the container",
      next: runContainer,
    });
  });
};

// Create and start the Docker container
const runContainer = () => {
  const createContainer = spawn("docker", [
    "run",
    "-d",
    "--name",
    containerName,
    "-p",
    portMapping,
    imageName,
  ]);

  createContainer.on("close", (code) => {
    continueOrExit({
      code,
      task: "create the container",
      next: () => console.log("Container created and started successfully."),
    });
  });
};

function spawn(
  command: string,
  args: readonly string[],
  options?: SpawnOptions
) {
  return _spawn(command, args, {
    stdio: "inherit", // Inherit the standard input, output, and error streams
    ...options,
  });
}

type ContinueOrExitArgs = {
  code: number | null;
  task: string;
  next?: () => void;
};
function continueOrExit({ code, task, next }: ContinueOrExitArgs) {
  if (code !== SUCCESS) {
    console.error(`Failed to ${task}. Exit code: ${code}`);
    process.exit(code ?? 1);
  }
  next?.();
}

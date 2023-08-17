import { spawn } from "child_process";

const imageName = "nestjs-spells-api-slim";
const containerName = "nestjs-slim";
const portMapping = "8000:8000";

// Build the Docker image
const buildImageProcess = spawn("docker", ["build", "-t", imageName, "."], {
  stdio: "inherit", // Inherit the standard input, output, and error streams
});

buildImageProcess.on("close", (code) => {
  if (code === 0) {
    // Remove the previous container
    const removeContainerProcess = spawn(
      "docker",
      ["rm", "-f", containerName],
      {
        stdio: "inherit",
      }
    );

    removeContainerProcess.on("close", (code) => {
      if (code === 0) {
        // Create and start the Docker container
        const createContainerProcess = spawn(
          "docker",
          ["run", "-d", "--name", containerName, "-p", portMapping, imageName],
          {
            stdio: "inherit", // Inherit the standard input, output, and error streams
          }
        );

        createContainerProcess.on("close", (code) => {
          if (code === 0) {
            console.log("Container created and started successfully.");
          } else {
            console.error(
              `Failed to create and start the container. Exit code: ${code}`
            );
          }
        });
      } else {
        console.error(
          `Failed to remove the previous container. Exit code: ${code}`
        );
      }
    });
  } else {
    console.error(`Image build failed. Exit code: ${code}`);
  }
});

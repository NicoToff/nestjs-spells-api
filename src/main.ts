import { NestFactory } from "@nestjs/core";
import { Logger, ValidationPipe } from "@nestjs/common";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ trustProxy: true })
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("D&D Home - NicoToff's API")
    .setDescription(
      "Serves homebrew content (spells and more) for D&D Home, a homebrew fork of D&D 5e. This is a work in progress, built with NestJS. More information can be found on the repo: https://github.com/NicoToff/nestjs-spells-api"
    )
    .setLicense(
      "MIT License",
      "https://raw.githubusercontent.com/NicoToff/nestjs-spells-api/main/LICENSE"
    )
    .setVersion("0.0.5")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(8000, "0.0.0.0", (err, address) => {
    if (err) Logger.error(err, "AppMain");
    Logger.debug(`Listening at ${address}`, "AppMain");
  });
}
bootstrap();

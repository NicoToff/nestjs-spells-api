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
    new FastifyAdapter()
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle("D&D 5e NicoToff API")
    .setDescription(
      "Serves homebrew spells (and more) for D&D 5th edition. This is a work in progress, built with NestJS. More information can be found at: https://github.com/NicoToff/nestjs-spells-api"
    )
    .setLicense(
      "MIT License",
      "https://raw.githubusercontent.com/NicoToff/nestjs-spells-api/main/LICENSE"
    )
    .setVersion("0.0.2")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);

  await app.listen(8000, "0.0.0.0", (err, address) => {
    if (err) Logger.error(err, "AppMain");
    Logger.debug(`Listening at ${address}`, "AppMain");
  });
}
bootstrap();

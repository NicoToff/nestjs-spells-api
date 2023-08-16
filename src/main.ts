import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(8000, "0.0.0.0", (err, address) => {
    if (err) Logger.error(err, "AppMain");
    Logger.debug(`Listening at ${address}`, "AppMain");
  });
}
bootstrap();

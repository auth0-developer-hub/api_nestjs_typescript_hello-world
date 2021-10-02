import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<string>("PORT");
  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors();
  await app.listen(port);
}

bootstrap();

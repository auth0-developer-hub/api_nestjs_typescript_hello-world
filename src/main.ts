import * as helmet from "helmet";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./http-exception.filter";
import { HeaderInterceptor } from "./interceptors/header.interceptor";

function checkEnvironment(configService: ConfigService) {
  const requiredEnvVars = [
    "PORT",
    "CLIENT_ORIGIN_URL",
    "AUTH0_AUDIENCE",
    "AUTH0_DOMAIN",
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!configService.get<string>(envVar)) {
      throw Error(`Undefined environment variable: ${envVar}`);
    }
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  checkEnvironment(configService);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new HeaderInterceptor());

  app.enableCors({
    origin: configService.get<string>("CLIENT_ORIGIN_URL"),
    methods: ["GET"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  });

  app.use(
    helmet({
      hsts: { maxAge: 31536000 },
      frameguard: { action: "deny" },
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "frame-ancestors": ["'none'"],
        },
      },
    }),
  );

  await app.listen(configService.get<string>("PORT"));
}

bootstrap();

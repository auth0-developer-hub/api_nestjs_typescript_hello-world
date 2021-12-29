import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as jwt from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
import { promisify } from "util";

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  AUTH0_AUDIENCE = this.configService.get("AUTH0_AUDIENCE");
  AUTH0_DOMAIN = this.configService.get("AUTH0_DOMAIN");

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.getArgByIndex(0);
    const res = context.getArgByIndex(1);

    const checkJwt = promisify(
      jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${this.AUTH0_DOMAIN}/.well-known/jwks.json`,
        }),
        audience: this.AUTH0_AUDIENCE,
        issuer: `https://${this.AUTH0_DOMAIN}/`,
        algorithms: ["RS256"],
      }),
    );

    try {
      await checkJwt(req, res);
      return true;
    } catch (error) {
      if (error.code && error.code === "credentials_required") {
        throw new UnauthorizedException(error.message);
      }

      if (error.code && error.code === "invalid_token") {
        throw new BadRequestException(error.message);
      }

      throw new InternalServerErrorException(error.message);
    }
  }
}

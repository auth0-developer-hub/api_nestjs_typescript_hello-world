import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Type,
} from "@nestjs/common";
import * as jwtAuthz from "express-jwt-authz";
import { promisify } from "util";

function createPermissionsGuard(routePermissions: string[]): Type<CanActivate> {
  @Injectable()
  class PermissionsGuardImpl implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
      if (!routePermissions) {
        return true;
      }

      const req = context.getArgByIndex(0);
      const res = context.getArgByIndex(1);

      const checkPerms = promisify(
        jwtAuthz(routePermissions, {
          customScopeKey: "permissions",
          checkAllScopes: true,
          failWithError: true,
        }),
      );

      try {
        await checkPerms(req, res);
        return true;
      } catch (e) {
        throw new ForbiddenException(e.message);
      }
    }
  }

  return PermissionsGuardImpl;
}

export const PermissionsGuard = (
  routePermissions: string[],
): Type<CanActivate> => createPermissionsGuard(routePermissions);

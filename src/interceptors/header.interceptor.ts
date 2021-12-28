import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class HeaderInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<T> {
    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        res.header(
          "Cache-Control",
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        );
        res.header("Surrogate-Control", "no-store");
        res.header("Pragma", "no-cache");
        res.header("Expires", "0");
      }),
    );
  }
}

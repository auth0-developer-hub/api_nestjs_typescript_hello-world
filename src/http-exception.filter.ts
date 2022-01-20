import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { Response } from "express";
import { ErrorMessage } from "./models/messages";

const errorMessages = {
  401: "Requires authentication",
  404: "Not Found",
  500: "Internal server error",
};

@Catch(HttpException)
@Catch(UnauthorizedException)
@Catch(InternalServerErrorException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response<ErrorMessage>>();
    const status = exception.getStatus();

    if (exception.message === "jwt malformed") {
      response.status(status).json({
        message: "Bad credentials",
      });
      return;
    }
    response.status(status).json({
      message: errorMessages[status],
    });
  }
}

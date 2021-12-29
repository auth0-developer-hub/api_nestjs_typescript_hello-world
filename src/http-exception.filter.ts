import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { Response } from "express";
import { ErrorMessage } from "./models/messages";

const errorMessages = {
  400: "Bad credentials",
  401: "Requires Authentication",
  404: "Not Found",
  500: "Internal server error",
};

@Catch(HttpException)
@Catch(BadRequestException)
@Catch(UnauthorizedException)
@Catch(InternalServerErrorException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response<ErrorMessage>>();
    const status = exception.getStatus();

    response.status(status).json({
      message: errorMessages[status],
    });
  }
}

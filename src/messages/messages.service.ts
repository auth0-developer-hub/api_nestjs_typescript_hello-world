import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { SuccessMessage } from "../models/messages";

@Injectable()
export class MessagesService {
  getPublicMessage = (): SuccessMessage => {
    return {
      message: "The API doesn't require an access token to share this message.",
    };
  };

  getProtectedMessage = (): SuccessMessage => {
    return {
      message: "The API successfully validated your access token.",
    };
  };

  getAdminMessage = (): SuccessMessage => {
    return {
      message: "The API successfully recognized you as an admin.",
    };
  };
}

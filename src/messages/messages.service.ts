import { Injectable } from "@nestjs/common";
import { Message } from "../message";

@Injectable()
export class MessagesService {
  getPublicMessage = (): Message => {
    return {
      message: "The API doesn't require an access token to share this message.",
    };
  };

  getProtectedMessage = (): Message => {
    return {
      message: "The API successfully validated your access token.",
    };
  };

  getAdminMessage = (): Message => {
    return {
      message: "The API successfully recognized you as an admin.",
    };
  };
}

import { Injectable } from "@nestjs/common";
import { Message } from "../models/messages";

@Injectable()
export class MessagesService {
  getPublicMessage = (): Message => {
    return {
      text: "The API doesn't require an access token to share this message.",
    };
  };

  getProtectedMessage = (): Message => {
    return {
      text: "The API successfully validated your access token.",
    };
  };

  getAdminMessage = (): Message => {
    return {
      text: "The API successfully recognized you as an admin.",
    };
  };
}

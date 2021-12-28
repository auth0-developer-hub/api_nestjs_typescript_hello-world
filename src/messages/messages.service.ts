import { Injectable } from "@nestjs/common";
import { Message } from "../models/messages";

@Injectable()
export class MessagesService {
  getPublicMessage = (): SuccessMessage => {
    return {
      text: "The API doesn't require an access token to share this message.",
    };
  };

  getProtectedMessage = (): SuccessMessage => {
    return {
      text: "The API successfully validated your access token.",
    };
  };

  getAdminMessage = (): SuccessMessage => {
    return {
      text: "The API successfully recognized you as an admin.",
    };
  };
}

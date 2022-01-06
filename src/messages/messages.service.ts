import { Injectable } from "@nestjs/common";
import { Message } from "../models/messages";

@Injectable()
export class MessagesService {
  getPublicMessage = (): Message => {
    return {
      metadata: {
        api: "api_nestjs_typescript_hello-world",
        branch: "starter",
      },
      text: "This is a public message.",
    };
  };

  getProtectedMessage = (): Message => {
    return {
      metadata: {
        api: "api_nestjs_typescript_hello-world",
        branch: "starter",
      },
      text: "This is a protected message.",
    };
  };

  getAdminMessage = (): Message => {
    return {
      metadata: {
        api: "api_nestjs_typescript_hello-world",
        branch: "starter",
      },
      text: "This is an admin message.",
    };
  };
}

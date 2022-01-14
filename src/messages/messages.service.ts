import { Injectable } from "@nestjs/common";
import { Message, Metadata } from "../models/messages";

const METADATA: Metadata = {
  api: "api_nestjs_typescript_hello-world",
  branch: "starter",
};

@Injectable()
export class MessagesService {
  getPublicMessage = (): Message => {
    return {
      metadata: METADATA,
      text: "This is a public message.",
    };
  };

  getProtectedMessage = (): Message => {
    return {
      metadata: METADATA,
      text: "This is a protected message.",
    };
  };

  getAdminMessage = (): Message => {
    return {
      metadata: METADATA,
      text: "This is an admin message.",
    };
  };
}

import { Controller, Get } from "@nestjs/common";
import { Message } from "../message";
import { MessagesService } from "./messages.service";

@Controller("api/messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get("public")
  async getPublic(): Promise<Message> {
    return this.messagesService.getPublicMessage();
  }

  @Get("protected")
  async getProtected(): Promise<Message> {
    return this.messagesService.getProtectedMessage();
  }

  @Get("admin")
  async getAdmin(): Promise<Message> {
    return this.messagesService.getAdminMessage();
  }
}

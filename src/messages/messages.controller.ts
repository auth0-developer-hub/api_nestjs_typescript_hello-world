import { Controller, Get } from "@nestjs/common";
import { Message } from "../models/messages";
import { MessagesService } from "./messages.service";

@Controller("api/messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get("public")
  async getPublic(): Promise<SuccessMessage> {
    return this.messagesService.getPublicMessage();
  }

  @Get("protected")
  async getProtected(): Promise<SuccessMessage> {
    return this.messagesService.getProtectedMessage();
  }

  @Get("admin")
  async getAdmin(): Promise<SuccessMessage> {
    return this.messagesService.getAdminMessage();
  }
}

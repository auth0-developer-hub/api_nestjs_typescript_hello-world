import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/authorization/authorization.guard";
import { Message } from "../models/messages";
import { MessagesService } from "./messages.service";

@Controller("api/messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get("public")
  async getPublic(): Promise<Message> {
    return this.messagesService.getPublicMessage();
  }

  @UseGuards(AuthorizationGuard)
  @Get("protected")
  async getProtected(): Promise<Message> {
    return this.messagesService.getProtectedMessage();
  }

  @UseGuards(AuthorizationGuard)
  @Get("admin")
  async getAdmin(): Promise<Message> {
    return this.messagesService.getAdminMessage();
  }
}

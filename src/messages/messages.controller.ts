import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/authorization/authorization.guard";
import { PermissionsGuard } from "src/authorization/permissions.guard";
import { Message } from "../models/messages";
import { MessagesService } from "./messages.service";
import { AdminMessagesPermissions } from "./messages-permissions";

@Controller("api/messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get("public")
  async getPublic(): Promise<Message> {
    return this.messagesService.getPublicMessage();
  }

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AdminMessagesPermissions.ReadAdminMessages]))
  @Get("protected")
  async getProtected(): Promise<Message> {
    return this.messagesService.getProtectedMessage();
  }

  @UseGuards(AuthorizationGuard)
  @UseGuards(PermissionsGuard([AdminMessagesPermissions.ReadAdminMessages]))
  @Get("admin")
  async getAdmin(): Promise<Message> {
    return this.messagesService.getAdminMessage();
  }
}

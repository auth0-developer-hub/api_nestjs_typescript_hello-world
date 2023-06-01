import { Controller, Get, UseGuards } from '@nestjs/common';
import { Message } from '../models/messages';
import { MessagesService } from './messages.service';
import { AuthorizationGuard } from '../authorization/authorization.guard';
import { PermissionsGuard } from 'src/authorization/permissions.guard';
import { MessagesPermissions } from './messages.permissions';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('public')
  async getPublic(): Promise<Message> {
    return this.messagesService.getPublicMessage();
  }

  @UseGuards(AuthorizationGuard)
  @Get('protected')
  async getProtected(): Promise<Message> {
    return this.messagesService.getProtectedMessage();
  }

  @UseGuards(PermissionsGuard([MessagesPermissions.READ_ADMIN]))
  @UseGuards(AuthorizationGuard)
  @Get('admin')
  async getAdmin(): Promise<Message> {
    return this.messagesService.getAdminMessage();
  }
}

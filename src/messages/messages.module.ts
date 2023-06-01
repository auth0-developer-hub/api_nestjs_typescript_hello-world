import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}

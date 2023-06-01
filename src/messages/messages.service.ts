import { Injectable } from '@nestjs/common';
import { Message } from '../models/messages';

@Injectable()
export class MessagesService {
  getPublicMessage = (): Message => {
    return {
      text: 'This is a public message.',
    };
  };

  getProtectedMessage = (): Message => {
    return {
      text: 'This is a protected message.',
    };
  };

  getAdminMessage = (): Message => {
    return {
      text: 'This is an admin message.',
    };
  };
}

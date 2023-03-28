import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessageService } from './services/messages.service';
import { MessagesRepository } from './repository/messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessagesRepository],
})
export class MessagesModule {}

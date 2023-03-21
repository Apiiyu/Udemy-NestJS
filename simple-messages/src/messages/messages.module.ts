import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessageService } from './services/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessageService],
})
export class MessagesModule {}

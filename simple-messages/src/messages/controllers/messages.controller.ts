import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from '../dto/create-message.dto';
import { MessageService } from '../services/messages.service';

@Controller('api/v1/messages')
export class MessagesController {
  constructor(public messageService: MessageService) {
    this.messageService = messageService;
  }

  /**
   * @description Handle GET requests to /api/v1/messages
   *
   * @return {Array} An array of messages
   */
  @Get()
  listMessages() {
    return this.messageService.messagesService_findAll();
  }

  /**
   * @description Handle POST requests to /api/v1/messages
   *
   * @return {string} The message that was created
   */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.messagesService_create(body.content);
  }

  /**
   * @description Handle GET requests to /api/v1/messages/:id
   *
   * @return {string} The message that was retrieved
   */
  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.messagesService_findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}

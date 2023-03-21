import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from '../dto/create-message.dto';
import { MessageService } from '../services/messages.service';

@Controller('api/v1/messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    // Service is creating its own dependencies
    // ! DON'T DO THIS on the real Applications !
    // ? Why? Because it'll make its own dependencies on constructor
    // ? and it'll be hard to test it
    // ? So we'll use DI (Dependency Injection) to inject the dependencies
    // * But, because this is a practice project, we'll do it this way
    this.messageService = new MessageService();
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
  getMessage(@Param('id') id: string) {
    return this.messageService.messagesService_findOne(id);
  }
}

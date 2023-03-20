import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('api/v1/messages')
export class MessagesController {
  /**
   * @description Handle GET requests to /api/v1/messages
   *
   * @return {Array} An array of messages
   */
  @Get()
  listMessages() {
    return [];
  }

  /**
   * @description Handle POST requests to /api/v1/messages
   *
   * @return {string} The message that was created
   */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }

  /**
   * @description Handle GET requests to /api/v1/messages/:id
   *
   * @return {string} The message that was retrieved
   */
  @Get(':id')
  getMessage(@Param('id') id: string)  {
    return id;
  }
}

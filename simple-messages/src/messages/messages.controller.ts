import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('api/v1/messages')
export class MessagesController {
  /**
   * @description Handle GET requests to /api/v1/messages
   *
   * @method GET
   * @apiGroup Messages
   * @access public
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
   * @param {string} message - The message to be created
   * @method POST
   * @apiGroup Messages
   * @access public
   *
   * @return {string} The message that was created
   */
  @Post()
  createMessage(@Body('message') message: string) {
    return message;
  }

  /**
   * @description Handle GET requests to /api/v1/messages/:id
   *
   * @param {string} id - The id of the message to be retrieved
   * @method GET
   * @apiGroup Messages
   * @access public
   *
   * @return {string} The message that was retrieved
   */
  @Get(':id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}

import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repository/messages.repository';

@Injectable()
export class MessageService {
  messagesRepository: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // ! DON'T DO THIS on the real Applications !
    // ? Why? Because it'll make its own dependencies on constructor
    // ? and it'll be hard to test it
    // ? So we'll use DI (Dependency Injection) to inject the dependencies
    // * But, because this is a practice project, we'll do it this way
    this.messagesRepository = new MessagesRepository();
  }

  async messagesService_findOne(id: string) {
    return await this.messagesRepository.messagesRepository_findOne(id);
  }

  async messagesService_findAll() {
    return await this.messagesRepository.messagesRepository_findAll();
  }

  async messagesService_create(content: string) {
    return await this.messagesRepository.messagesRepository_create(content);
  }
}

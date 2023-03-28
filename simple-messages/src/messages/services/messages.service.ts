import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repository/messages.repository';

@Injectable()
export class MessageService {
  constructor(public messagesRepository: MessagesRepository) {
    this.messagesRepository = messagesRepository;
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

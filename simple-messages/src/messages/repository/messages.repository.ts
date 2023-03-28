import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  // namespace: true

  async messagesRepository_findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async messagesRepository_findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async messagesRepository_create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 1000000); // Generate a random ID
    messages[id] = {
      id,
      content,
    };

    await writeFile('messages.json', JSON.stringify(messages));
    return {
      statusCode: 201,
      message: 'Message created successfully',
      data: messages[id],
    };
  }
}

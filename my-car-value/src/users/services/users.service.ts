import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  create(email: string, password: string) {
    const user = this.UserRepository.create({ email, password }); // ? Create function is used to create a new instance of the entity

    return this.UserRepository.save(user); // ? Save function is used to save the entity to the database
  }

  findOne(id: number) {
    return this.UserRepository.findOne({
      where: { id },
    });
  }

  find(email: string) {
    return this.UserRepository.find({
      where: { email },
    });
  }

  async update(id: number, attrs: Partial<UserEntity>) {
    // return this.UserRepository.update(id, attrs); // ? Method update is expected to have arguments just plain object, not entity like method save. So if we've hooks inside our entity, they won't be called.

    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, attrs); // ? Object.assign is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will copy all the properties from attrs to user.
    return this.UserRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return this.UserRepository.remove(user); // ? Method remove is working with entity, not plain object. So if we've hooks inside our entity, they will be called. Is it good or bad? It depends on your needs. For example, if we just want to remove the entity from the database, we can use method delete. Because it's faster than remove. But if we want to do something before removing the entity, we can use method remove.
  }
}

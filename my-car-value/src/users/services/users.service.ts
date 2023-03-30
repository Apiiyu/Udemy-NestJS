import { Injectable } from '@nestjs/common';
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
}

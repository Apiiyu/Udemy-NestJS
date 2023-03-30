import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../services/users.service';

@Controller('api/v1/authentication')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('/create-user')
  createUser(@Body() body: CreateUserDto) {
    return this.UsersService.create(body.email, body.password);
  }
}

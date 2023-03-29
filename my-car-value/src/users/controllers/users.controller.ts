import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('api/v1/authentication')
export class UsersController {
  @Post('/create-user')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
}

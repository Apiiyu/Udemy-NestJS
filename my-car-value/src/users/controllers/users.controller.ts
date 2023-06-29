import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UsersService as Service } from '../services/users.service';

@Controller('api/v1/authentication')
export class UsersController {
  constructor(private readonly UsersService: Service) {}

  @Post('/create-user')
  createUser(@Body() body: CreateUserDto) {
    return this.UsersService.create(body.email, body.password);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.UsersService.findOne(parseInt(id));
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.UsersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.UsersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() requestBody: UpdateUserDto) {
    return this.UsersService.update(parseInt(id), requestBody);
  }
}

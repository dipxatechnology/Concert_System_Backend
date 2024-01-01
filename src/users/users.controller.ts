import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { log } from 'console';

@Controller('users')
export class UsersController {
  @Get()
  listAllUsers() {
    return 'adam, akkif';
  }
  @Post()
  addUsers(@Body() body: any) {
    console.log(body);
  }
  @Get('/:id')
  getUsers(@Param('id') id: string) {
    console.log(id);
  }
}

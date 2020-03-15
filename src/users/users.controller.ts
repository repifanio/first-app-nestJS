import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from './entity/user.entity';
import { UserService } from './shared/user.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UserService) {}
    
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }

    @Get(':id')
    findone(@Param('id') id: number): Promise<User> {
      return this.usersService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createUserDto: CreateUserDto){
      return this.usersService.update(id, createUserDto)
    } 

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}

import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserService } from './shared/user.service';

@Controller('users')
export class UsersController {

    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>, ) {

    }
    

  @Get()
  findAll(): Repository<User>{

   // this.usersRepository = UserService.

    return null;
  }
}

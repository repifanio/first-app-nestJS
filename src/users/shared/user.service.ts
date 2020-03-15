import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import {User} from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
            private usersRepository: Repository<User>,
      ) {}

      async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
      }

      async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.isActive = createUserDto.isActive;
    
        return await this.usersRepository.save(user);
      }

      async update(id: number, createUserDto: CreateUserDto): Promise<User> {

        // eslint-disable-next-line prefer-const
        let firstUser = await this.usersRepository.findOne(id);

        firstUser.lastName = 'Camargo';

        return await this.usersRepository.save(firstUser);
      }
    
}

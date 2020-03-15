import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers:[UserService],
    controllers:[UsersController]
})
export class UsersModule {}
    
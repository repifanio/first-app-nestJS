import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    controllers:[UsersController],
    providers:[UserService]
})
export class UsersModule {}
    
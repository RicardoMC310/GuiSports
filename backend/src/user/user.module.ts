import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './entity/user.entity';
import PasswordModule from '../shared/modules/password/password.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PasswordModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from './entity/user.entity';
import { Repository } from 'typeorm';
import CreateUserDTO from './dto/create-user.dto';
import PasswordService from '../shared/modules/password/password.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repo: Repository<UserEntity>,
        private readonly passwordService: PasswordService
    ) { }

    async register(createUserDTO: CreateUserDTO): Promise<void> {
        const passwordHash: string = await this.passwordService.hash(createUserDTO.password);

        const userEntity: UserEntity = new UserEntity();
        userEntity.name = createUserDTO.name;
        userEntity.email = createUserDTO.email;
        userEntity.password_hash = passwordHash;

        this.repo.save(userEntity);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from './entity/user.entity';
import { Repository } from 'typeorm';
import CreateUserDTO from './dto/create-user.dto';
import PasswordService from '../shared/modules/password/password.service';
import AppError from '../valueObjects/AppError';

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

        await this.repo.save(userEntity);
    }

    async findByEmail(email: string): Promise<UserEntity> {
        const result = await this.repo.findOne({ where: { email: email } });

        if (!result) {
            throw new AppError("Email não encontrado", 404);
        }

        return result;
    }
}

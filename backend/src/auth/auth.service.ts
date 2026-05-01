import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import PasswordService from '../shared/modules/password/password.service';
import LoginResponseDTO from './dto/login-response.dto';
import LoginRequestDTO from './dto/login-request.dto';
import UserEntity from '../user/entity/user.entity';
import AppError from '../valueObjects/AppError';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        private readonly passwordService: PasswordService
    ) { }

    async login(loginRequestDTO: LoginRequestDTO): Promise<LoginResponseDTO> {
        const userEntity: UserEntity = await this.userService.findByEmail(loginRequestDTO.email);

        if (!this.passwordService.compare(userEntity.password_hash, loginRequestDTO.password)) {
            throw new AppError("Senha incompatível", 403);
        }

        const payload = {
            id: userEntity.id,
            email: userEntity.email,
            name: userEntity.name
        };

        return {
            token: this.jwtService.sign(payload)
        }
    }
}

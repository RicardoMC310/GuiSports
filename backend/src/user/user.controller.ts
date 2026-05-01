import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDTO from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() body: CreateUserDTO): Promise<void> {
        await this.userService.register(body);
    }
}

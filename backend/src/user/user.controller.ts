import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDTO from './dto/create-user.dto';
import { type Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';

type RequestWithUser = Request & {
    user: any
};

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post("/register")
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() body: CreateUserDTO): Promise<void> {
        await this.userService.register(body);
    }

    @UseGuards(AuthGuard)
    @Get("/me")
    me(@Req() req: RequestWithUser) {
        return req.user;
    }
}

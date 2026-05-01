import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginRequestDTO from './dto/login-request.dto';
import { type Response } from "express";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post("/login")
    @HttpCode(HttpStatus.OK)
    async login(@Res() res: Response, @Body() body: LoginRequestDTO): Promise<Response<any, Record<string, any>>> {
        const { token } = await this.authService.login(body);

        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 14 * 7,
            path: "/",
            signed: true
        });

        return res.send({ok: true});
    }
}

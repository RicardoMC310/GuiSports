import { Body, Controller, HttpCode, HttpStatus, Post, Res, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginRequestDTO from './dto/login-request.dto';
import { type Response } from "express";
import { AuthGuard } from './auth.guard';

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
            signed: false
        });

        return res.send({ok: true});
    }

    @Get("/logout")
    @HttpCode(HttpStatus.OK)
    async logout(@Res() res: Response): Promise<Response<any, Record<string, any>>> {
        res.clearCookie("access_token", {
            path: "/"
        });

        return res.send({ok: true});
    }
}

import { IsEmail, IsString, MinLength } from "class-validator";

export default class LoginRequestDTO {
    @IsString()
    @IsEmail()
    email!: string;

    @IsString()
    password!: string;
}
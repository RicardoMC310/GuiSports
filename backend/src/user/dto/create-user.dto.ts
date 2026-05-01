import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export default class CreateUserDTO {
    @IsString()
    @MaxLength(64)
    @MinLength(3)
    name!: string;

    @IsString()
    @IsEmail()
    email!: string;

    @IsString()
    password!: string;
}
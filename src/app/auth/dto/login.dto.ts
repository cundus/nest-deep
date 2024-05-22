import { IsEmail, IsNotEmpty, Min } from 'class-validator'

export class LoginDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}

import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @IsNumber()
    role: number
}

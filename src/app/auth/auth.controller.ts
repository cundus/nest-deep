import { Body, Controller, Post } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginDTO) {
        return this.authService.login(body)
    }

    @Post('register')
    async register(@Body() body: CreateUserDto) {
        return this.authService.register(body)
    }
}

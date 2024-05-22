import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { userProvider } from '../user/user.provider'

@Module({
    controllers: [AuthController],
    providers: [AuthService, ...userProvider],
})
export class AuthModule {}

import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserService } from '../user/user.service'
import { PrismaService } from 'src/lib/db/prisma.service'
import { JwtModule, JwtService } from '@nestjs/jwt'

@Module({
    imports: [
        JwtModule.register({
            privateKey: process.env.SECRET_KEY,
            global: true,
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, PrismaService],
})
export class AuthModule {}

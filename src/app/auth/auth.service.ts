import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { User } from '../user/entities/user.entity'

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: typeof User
    ) {}

    async login(body: LoginDTO) {
        const existedUser = await this.userRepository.findOne({
            where: {
                email: body.email,
                password: body.password,
            },
        })

        if (!existedUser) {
            throw new NotFoundException('User not found')
        }

        const token = existedUser.email

        return token
    }

    async register(body: CreateUserDto) {
        return this.userRepository.create({
            ...body,
        })
    }
}

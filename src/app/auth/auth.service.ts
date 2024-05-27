import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { LoginDTO } from './dto/login.dto'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserService,
        private jwtService: JwtService
    ) {}

    async login(body: LoginDTO) {
        // TODO Implement login
        const existedUser = await this.userRepository.findOneByEmail(body.email)

        if (!existedUser) {
            throw new NotFoundException('User not found')
        }

        if (existedUser.password !== body.password) {
            throw new NotFoundException('User not found')
        }

        const token = await this.jwtService.signAsync({
            email: existedUser.email,
            id: existedUser.id,
            role: existedUser.roleId,
        })

        // const token = existedUser.email
        return { token }
    }

    async register(body: CreateUserDto) {
        // TODO Implement register

        const existedUser = await this.userRepository.findOneByEmail(body.email)

        if (existedUser) {
            throw new NotFoundException('User already exists')
        }

        return this.userRepository.create(body)

        // return this.userRepository.create({
        //     ...body,
        // })
    }
}

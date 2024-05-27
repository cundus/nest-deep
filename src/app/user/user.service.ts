import { Injectable, Inject, Logger } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/lib/db/prisma.service'
import { user } from '@prisma/client'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        await this.prisma
            .$executeRaw`INSERT INTO user(name,email,password,roleId)
        VALUES
        (
            ${createUserDto.name},
            ${createUserDto.email},
            ${createUserDto.password},
            ${createUserDto.role}
        )
        `

        return 'Success Register'
    }

    findAll() {}

    async findOne(id: number) {
        return id
    }

    async findOneByEmail(email: string): Promise<user> {
        return await this.prisma.user.findUnique({ where: { email } })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}

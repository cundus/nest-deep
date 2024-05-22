import { Injectable, Inject } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: typeof User
    ) {}

    create(createUserDto: CreateUserDto) {
        return this.userRepository.create<User>({
            ...createUserDto,
        })
    }

    findAll() {
        return this.userRepository.findAll<User>()
    }

    findOne(id: number) {
        return `This action returns a #${id} user`
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}

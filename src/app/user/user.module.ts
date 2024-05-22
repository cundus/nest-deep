import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { DatabaseModule } from 'src/lib/db/database.module'
import { userProvider } from './user.provider'

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...userProvider],
})
export class UserModule {}

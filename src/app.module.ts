import { Module } from '@nestjs/common'
import { UserModule } from './app/user/user.module'
import { ProductModule } from './app/product/product.module'
import { AuthModule } from './app/auth/auth.module'

@Module({
    imports: [UserModule, ProductModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}

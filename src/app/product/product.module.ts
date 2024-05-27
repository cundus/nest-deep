import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { CloudinaryModule } from 'src/lib/config/cloudinary/cloudinary.module'
import { PrismaService } from 'src/lib/db/prisma.service'

@Module({
    imports: [CloudinaryModule],
    controllers: [ProductController],
    providers: [ProductService, PrismaService],
})
export class ProductModule {}

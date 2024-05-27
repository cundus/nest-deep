import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { CloudinaryService } from 'src/lib/config/cloudinary/cloudinary.service'
import { PrismaService } from 'src/lib/db/prisma.service'

@Injectable()
export class ProductService {
    constructor(
        private cloudinary: CloudinaryService,
        private prisma: PrismaService
    ) {}

    async create(
        createProductDto: CreateProductDto,
        files: Array<Express.Multer.File>
    ): Promise<CreateProductDto> {
        const imageList: { url: string }[] = []
        await Promise.all(
            files.map(async (file) => {
                const result = await this.cloudinary.uploadImage(file)
                console.log(result)

                imageList.push({
                    url: result.secure_url,
                })
            })
        )

        const createdProduct = await this.prisma.product.create({
            data: {
                ...createProductDto,
                price: Number(createProductDto.price),
                images: {
                    create: imageList,
                },
            },
            include: {
                images: true,
            },
        })

        return createdProduct
    }

    findAll() {
        return `This action returns all product`
    }

    findOne(id: number) {
        return `This action returns a #${id} product`
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return `This action updates a #${id} product`
    }

    remove(id: number) {
        return `This action removes a #${id} product`
    }
}

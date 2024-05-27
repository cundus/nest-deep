import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @UseInterceptors(FilesInterceptor('image'))
    create(
        @Body() createProductDto: CreateProductDto,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        return this.productService.create(createProductDto, files)
    }

    @Get()
    findAll() {
        return this.productService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.productService.update(+id, updateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id)
    }
}

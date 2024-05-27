export class CreateProductDto {
    name: string
    desc: string
    price: number
    image?: IProductImage[]
}

interface IProductImage {
    url: string
}

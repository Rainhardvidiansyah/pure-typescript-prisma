import { PrismaService } from "../prisma/prismaservice";
import { ProductService } from "../service/productservice";



export class ProductController{

    prismaService = new PrismaService
    productService = new ProductService(this.prismaService);

    constructor(productService: ProductService){
        this.productService = productService;
    }

    async getAllProduct(){
       const products = await this.productService.GetAllProduct();
        console.log("Product controller " + products);
    }
}
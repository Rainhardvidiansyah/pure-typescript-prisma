
import { ProductController } from "./controller/productcontroller";
import { PrismaService } from "./prisma/prismaservice";
import { ProductService } from "./service/productservice";



const prismaService = new PrismaService();

const productService = new ProductService(prismaService);
const productController = new ProductController(productService);

productController.getAllProduct();



async function Main() {

    // let allProduct = await productService.GetAllProduct();
    // console.log("All products: ->>> " + allProduct)
    
    
}


Main()
.catch(async () => {
    await prismaService.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prismaService.$disconnect()
    process.exit(1)
});


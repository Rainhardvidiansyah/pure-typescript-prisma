import { Product } from "@prisma/client";
import { PrismaService } from "../prisma/prismaservice";



export class ProductService {

  prismaService = new PrismaService();
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async GetAllProduct (): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }
  
}


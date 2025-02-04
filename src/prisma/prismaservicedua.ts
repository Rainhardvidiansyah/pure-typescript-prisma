import { PrismaClient } from "@prisma/client";


export class PrismaServiceDua{

    private client: PrismaClient;
    private model: any;

    constructor(model: keyof PrismaClient){
        this.client = new PrismaClient();
        this.model = this.client[model];
    }

}
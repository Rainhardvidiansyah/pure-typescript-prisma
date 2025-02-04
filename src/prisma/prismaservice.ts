import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }

  async connect() {
    await this.$connect();
    console.log('Database connected');
  }

  async disconnect() {
    await this.$disconnect();
    console.log('Database disconnected');
  }

}

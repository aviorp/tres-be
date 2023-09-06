import { type Request } from 'express';
import { type Transaction } from '@prisma/client';
import { prisma } from '@/db';
import queryBuilder from '@/utils/queryBuilder';

class TransactionService {
  async getAll(req: Request): Promise<Transaction[]> {
    return prisma.transaction.findMany(queryBuilder(req));
  }

  async getById(req: Request): Promise<Transaction | null> {
    return prisma.transaction.findUnique(queryBuilder(req));
  }

  async getBytransactionname(req: any): Promise<Transaction | null> {
    return prisma.transaction.findUnique(queryBuilder(req));
  }

  async create(req: Request): Promise<Transaction> {
    return prisma.transaction.create(queryBuilder(req));
  }

  async createBulk(query): Promise<any> {
    return prisma.transaction.createMany(query);
  }

  async update(query): Promise<any> {
    return prisma.transaction.update(query);
  }

  async delete(query): Promise<Transaction> {
    return prisma.transaction.delete(query);
  }
}

export default new TransactionService();

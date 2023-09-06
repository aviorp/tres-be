import { type Request } from 'express';
import { type Transaction } from '@prisma/client';
import TransactionService from './service';

/**
 * This Class is responsible for the business logic of the user endpoint.
 * @class User Business Logic Class for the user endpoint.
 */
class TransactionBL {
  query: any;

  async getAll(req: Request): Promise<Transaction[]> {
    return TransactionService.getAll(req);
  }

  async getById(req: Request): Promise<Transaction | null> {
    return TransactionService.getById(req);
  }

  async getByUsername(req: Request): Promise<Transaction | null> {
    return TransactionService.getByUsername(req);
  }

  async create(req: Request): Promise<Transaction> {
    return TransactionService.create(req);
  }

  async createBulk(req: Request): Promise<Transaction> {
    return TransactionService.createBulk(req);
  }

  async update(req: Request): Promise<Transaction> {
    return TransactionService.update(req);
  }

  async delete(req: Request): Promise<Transaction> {
    return TransactionService.delete(req);
  }
}

export default new TransactionBL();

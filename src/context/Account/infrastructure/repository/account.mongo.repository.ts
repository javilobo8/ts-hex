import mongoose from 'mongoose';
import { IAccountRepository } from '../../domain/account.repository';
import { AccountModel } from '../../domain/account.model';

export class AccountMongoRepository implements IAccountRepository {
  private collection: mongoose.Collection;

  constructor() {
    this.collection = mongoose.connection.collection('accounts');
  }

  public async create(account: AccountModel): Promise<void> {
    await this.collection.insertOne(account.toPrimitive());
  }

  public async findById(id: string): Promise<AccountModel|null> {
    return null;
  }
}
import { AccountModel } from './account.model';

export interface IAccountRepository {
  create(account: AccountModel): Promise<void>;
  findById(id: string): Promise<AccountModel|null>;
}
import { AccountModel } from '../domain/account.model';
import { IAccountRepository } from '../domain/account.repository';

export type AccountAddAccountServiceRequest = {
  summonerName: string;
  region: string;
};

export class AccountAddAccountService {
  constructor(
    readonly accountRepository: IAccountRepository,
  ) { }

  async execute(account: AccountAddAccountServiceRequest) {
    const accountEntity = AccountModel.fromJson(account);
    await this.accountRepository.create(accountEntity);
  }
}
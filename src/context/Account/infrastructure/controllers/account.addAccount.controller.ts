import { Request, Response } from 'express';

import { AccountAddAccountService } from 'context/Account/application/account.addAccount.service';

export class AccountAddAccountController {
  constructor (
    readonly accountAddAccountService: AccountAddAccountService,
  ) { }

  async handler(req: Request, res: Response) {
    const { summonerName, region } = req.body;
    await this.accountAddAccountService.execute({ summonerName, region });
    res.status(201).send();
  }
}
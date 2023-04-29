import { Router } from 'express';

import { AccountAddAccountService } from '../../application/account.addAccount.service';
import { AccountAddAccountController } from './account.addAccount.controller';
import { AccountMongoRepository } from '../repository/account.mongo.repository';

export default function buildRouter() {
  // Repository
  const accountRepository = new AccountMongoRepository();

  // Service
  const accountAddAccountService = new AccountAddAccountService(accountRepository);

  // Controller
  const accountAddAccountController = new AccountAddAccountController(accountAddAccountService);

  // Router
  const router = Router();

  router.post('/', accountAddAccountController.handler.bind(accountAddAccountController));

  return router;
}
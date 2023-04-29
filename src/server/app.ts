import * as express from 'express';

import accountRouter from '../context/Account/infrastructure/controllers/account.routes';

const app = express();

app.use(express.json());

app.use('/account', accountRouter());

export default app;

import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';

const routes = new Router();

routes.post('/recipients', RecipientsController.store);

routes.get('/', (req, res) => {
  return res.json({ message: `Hola mundo! Que tal? 2+2=?? -> ${2 + 2} ` });
});

export default routes;

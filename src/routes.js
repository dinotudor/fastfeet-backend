import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

/* SESSION */
routes.post('/session', SessionController.store);

/* RECIPIENTS */
routes.post('/recipients', RecipientsController.store);

/* TEST */
routes.get('/', (req, res) => {
  return res.json({ message: `Hola mundo! Que tal? 2+2=?? -> ${2 + 2} ` });
});

export default routes;

import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';
import AdminController from './app/controllers/AdminController';

const routes = new Router();

/* ADMIN */
routes.put('/admin', AdminController.update);

/* RECIPIENTS */
routes.post('/recipients', RecipientsController.store);

/* TEST */
routes.get('/', (req, res) => {
  return res.json({ message: `Hola mundo! Que tal? 2+2=?? -> ${2 + 2} ` });
});

export default routes;

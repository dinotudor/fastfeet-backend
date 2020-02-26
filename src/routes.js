import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

/* SESSION */
routes.post('/session', SessionController.store);

/* AUTHENTICATION MIDDLEWARE */
routes.use(AuthMiddleware);

/* RECIPIENTS */
routes.post('/recipients', RecipientsController.store);


});

export default routes;

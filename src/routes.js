import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';
import CourierController from './app/controllers/CouriersController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/* SESSION */
routes.post('/session', SessionController.store);

/* AUTHENTICATION MIDDLEWARE */
routes.use(AuthMiddleware);

/* RECIPIENTS */
routes.get('/recipients', RecipientsController.index);
routes.post('/recipients', RecipientsController.store);
routes.put('/recipients/:id', RecipientsController.update);
routes.delete('/recipients/:id', RecipientsController.delete);

/* FILES */
routes.post('/files', upload.single('file'), CourierController.store);

export default routes;

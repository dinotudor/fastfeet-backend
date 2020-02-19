import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hola mundo! Que tal?' });
});

export default routes;

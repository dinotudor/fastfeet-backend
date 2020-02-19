const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hola mundo! Que tal?' });
});

module.exports = routes;

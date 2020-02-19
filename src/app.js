const express = require('express');

class App {
  contructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;

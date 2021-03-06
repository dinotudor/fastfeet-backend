import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Recipients from '../app/models/Recipients';
import User from '../app/models/User';

const models = [Recipients, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();

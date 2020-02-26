import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        postal: Sequelize.INTEGER,
        country: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Recipients;

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
      });
    }
  }
  Cost.init({
    city_id: DataTypes.INTEGER,
    cost_living: DataTypes.FLOAT,
    hotel: DataTypes.FLOAT,
    apartment: DataTypes.FLOAT,
    cappuccino: DataTypes.FLOAT,
    beer: DataTypes.FLOAT,
    dinner: DataTypes.FLOAT,
    petrol: DataTypes.FLOAT,
    kindergarten: DataTypes.FLOAT,
    salary: DataTypes.FLOAT,
    coworking: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Cost',
  });
  return Cost;
};

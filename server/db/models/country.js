const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.City, {
        foreignKey: 'country_id',
      });
    }
  }
  Country.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    currency: DataTypes.STRING,
    language: DataTypes.STRING,
    religion: DataTypes.STRING,
    gdp: DataTypes.FLOAT,
    apartment_url: DataTypes.TEXT,
    insurance_url: DataTypes.TEXT,
    visa: DataTypes.BOOLEAN,
    without_visa: DataTypes.STRING,
    visa_url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};

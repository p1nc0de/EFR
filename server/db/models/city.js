const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Country, {
        foreignKey: 'country_id',
      });
      this.hasMany(models.Cost, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.Favorite, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.Photo, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.Review, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.User, {
        foreignKey: 'current_city_id',
      });
      this.hasMany(models.User, {
        foreignKey: 'future_city_id',
      });
    }
  }
  City.init({
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    zip_code: DataTypes.INTEGER,
    population: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    internet: DataTypes.STRING,
    best_nbh: DataTypes.STRING,
    upcoming_nbh: DataTypes.STRING,
    photo: DataTypes.TEXT,
    video_url: DataTypes.TEXT,
    map_screen: DataTypes.TEXT,
    map_url: DataTypes.TEXT,
    nbhs_map: DataTypes.TEXT,
    weather_api: DataTypes.TEXT,
    air_api: DataTypes.TEXT,
    quality_of_life: DataTypes.STRING,
    family_score: DataTypes.STRING,
    safety: DataTypes.STRING,
    english_speaking: DataTypes.STRING,
    nightlife: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};

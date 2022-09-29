const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
      });
      this.hasMany(models.Like, {
        foreignKey: 'photo_id',
      });
    }
  }
  Photo.init({
    photo: DataTypes.TEXT,
    description: DataTypes.TEXT,
    city_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};

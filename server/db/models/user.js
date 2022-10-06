const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Favorite, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Photo, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Like, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.Review, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.City, {
        foreignKey: 'current_city_id',
      });
      this.belongsTo(models.City, {
        foreignKey: 'future_city_id',
      });
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    avatar: DataTypes.TEXT,
    info: DataTypes.TEXT,
    profession: DataTypes.STRING,
    birth_country: DataTypes.STRING,
    current_country: DataTypes.STRING,
    future_country: DataTypes.STRING,
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    telegram: DataTypes.STRING,
    current_city_id: DataTypes.INTEGER,
    future_city_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

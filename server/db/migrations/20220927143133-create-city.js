/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'id',
        },
      },
      zip_code: {
        type: Sequelize.INTEGER,
      },
      population: {
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      internet: {
        type: Sequelize.STRING,
      },
      best_nbh: {
        type: Sequelize.STRING,
      },
      upcoming_nbh: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      video_url: {
        type: Sequelize.TEXT,
      },
      map_screen: {
        type: Sequelize.TEXT,
      },
      map_url: {
        type: Sequelize.TEXT,
      },
      nbhs_map: {
        type: Sequelize.TEXT,
      },
      weather_api: {
        type: Sequelize.TEXT,
      },
      air_api: {
        type: Sequelize.TEXT,
      },
      quality_of_life: {
        type: Sequelize.STRING,
      },
      family_score: {
        type: Sequelize.STRING,
      },
      safety: {
        type: Sequelize.STRING,
      },
      english_speaking: {
        type: Sequelize.STRING,
      },
      nightlife: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cities');
  },
};

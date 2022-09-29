/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Costs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
      },
      cost_living: {
        type: Sequelize.FLOAT,
      },
      hotel: {
        type: Sequelize.FLOAT,
      },
      apartment: {
        type: Sequelize.FLOAT,
      },
      cappuccino: {
        type: Sequelize.FLOAT,
      },
      beer: {
        type: Sequelize.FLOAT,
      },
      dinner: {
        type: Sequelize.FLOAT,
      },
      petrol: {
        type: Sequelize.FLOAT,
      },
      kindergarten: {
        type: Sequelize.FLOAT,
      },
      salary: {
        type: Sequelize.FLOAT,
      },
      coworking: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('Costs');
  },
};

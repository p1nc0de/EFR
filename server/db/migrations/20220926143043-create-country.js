/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      currency: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      religion: {
        type: Sequelize.STRING,
      },
      gdp: {
        type: Sequelize.FLOAT,
      },
      apartment_url: {
        type: Sequelize.TEXT,
      },
      insurance_url: {
        type: Sequelize.TEXT,
      },
      visa: {
        type: Sequelize.BOOLEAN,
      },
      without_visa: {
        type: Sequelize.STRING,
      },
      visa_url: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Countries');
  },
};

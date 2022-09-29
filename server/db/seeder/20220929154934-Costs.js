/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Costs', [
      {
        city_id: 1,
        cost_living: 1773,
        hotel: 892,
        apartment: 406,
        beer: 1.08,
        cappuccino: 1.51,
        dinner: 11,
        petrol: 1.27,
        kindergarten: 169.17,
        salary: 304.61,
        coworking: 252,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city_id: 2,
        cost_living: 1931,
        hotel: 702,
        apartment: 441,
        beer: 1.41,
        cappuccino: 2.41,
        dinner: 8.83,
        petrol: 1.36,
        kindergarten: 208.48,
        salary: 448.92,
        coworking: 254,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Costs', null, {});
  },
};

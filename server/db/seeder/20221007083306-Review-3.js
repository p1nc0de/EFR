/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        user_id: 16,
        city_id: 1,
        review: 'Анталия - кайф!! Не жизнь, а мечта! Но на пути к мечте пришлось простоять на границе с Грузией почти 5 дней, я уже привык справлять нужду на улице и пить коровью мочу, до сих пор не могу отвыкнуть от этого! Могу расказать все в красках от первого лица - пишите в телегу, пообщаемся!',
        plus: 'Есть старинные башни и здания в старой части.',
        minus: 'Сильная жара в летние месяцы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        city_id: 1,
        review: 'В целом ок, но я другого ожидала! Следующая точка - Бали, напишу оттуда .',
        plus: 'Есть старинные башни и здания в старой части.',
        minus: 'Сильная жара в летние месяцы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Sasha',
        email: 'sasha69@tudasuda.ua',
        password: '123',
        avatar: 'https://www.kindpng.com/picc/m/173-1730337_transparent-johnny-bravo-png-cartoon-character-johnny-bravo.png',
        info: ' Джава скрипт в массы, и натуралам и 3-2-1 ',
        profession: 'Продюсер',
        birth_country: 'Россия',
        current_country: 'Турция',
        future_country: 'Грузия',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Alex',
        email: 'suroviy95@panin.com',
        password: '1',
        avatar: 'https://www.film.ru/sites/default/files/people/1455319-938831.jpg',
        info: ' Это был не я ',
        profession: 'Актер',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Турция',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

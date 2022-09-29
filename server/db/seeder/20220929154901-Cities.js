/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        name: 'Анталия',
        country_id: 1,
        zip_code: 7170,
        population: 945049,
        rating: 4.35,
        internet: '7 MBPs',
        best_nbh: 'Район Коньяалты',
        photo: 'https://horosho-tam.ru/thumb/top/pics/9a/13/59a8507c0b3ec54050d9139a/antaliya.jpg',
        video_url: 'https://www.youtube.com/watch?v=6QEp58Cu98M&ab_channel=RashimilianTravel',
        map_screen: 'https://nomadlist.com/assets/img/static-maps/antalya-turkey.png?1655251594',
        map_url: 'https://www.google.com/maps/@36.88414,30.70563,13z',
        nbhs_map: 'https://hoodmaps.com/antalya-neighborhood-map',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тбилиси',
        country_id: 2,
        zip_code: 0162,
        population: 3728600,
        rating: 4.2,
        internet: '10 MBPs',
        best_nbh: 'Старый город, Мтацминда',
        upcoming_nbh: 'Зейтинкей',
        photo: 'https://kartinkin.net/uploads/posts/2022-02/1645860795_40-kartinkin-net-p-gruziya-kartinki-47.jpg',
        video_url: 'https://www.youtube.com/watch?v=1CE6W5BubQo&list=WL&index=1&t=11s&ab_channel=Chady',
        map_screen: 'https://nomadlist.com/assets/img/static-maps/tbilisi-georgia.png?1653004840',
        map_url: 'https://www.google.com/maps/@41.716667,44.783333,13z',
        nbhs_map: 'https://hoodmaps.com/tbilisi-neighborhood-map',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Сities', null, {});
  },
};

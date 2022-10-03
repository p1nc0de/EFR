/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [
      {
        photo: 'https://www.orangesmile.com/common/img_cities_original/antalya--735347-1.jpg',
        description: '1',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/dd8/bb7/staryy-gorod-v-antalii_128.jpg',
        description: '2',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/d44/dcd/staryy-gorod-v-antalii_121.jpg',
        description: '3',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/72f/8ea/staryy-gorod-v-antalii_119.jpg',
        description: '4',
        city_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/59c/2d3/staryy-gorod-v-antalii_92.jpg',
        description: '5',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/380/6f4/staryy-gorod-v-antalii_73.jpg',
        description: '6',
        city_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/dda/d42/staryy-gorod-v-antalii_32.jpg',
        description: '7',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/022/28f/staryy-gorod-v-antalii_29.jpg',
        description: '8',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/a7b/d7b/staryy-gorod-v-antalii_11.jpg',
        description: '9',
        city_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/ec8/602/antaliya_201.jpg',
        description: '10',
        city_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/2c7/968/antaliya_177.jpg',
        description: '11',
        city_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://wikiway.com/upload/hl-photo/a76/50c/antaliya_66.jpg',
        description: '12',
        city_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};

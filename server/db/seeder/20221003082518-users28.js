module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Alina',
        email: 'alechka@mail.ru',
        password: '1',
        avatar: 'https://cdn.ren.tv/cache/960x540/media/img/f3/b4/f3b4e9f604877a3a000ca1339e50109b18270eda.JPG',
        info: 'Пишите - познакомимся!!!',
        profession: 'Модель',
        birth_country: 'Россия',
        current_country: 'Алания',
        future_country: 'Дубай',
        admin: false,
        telegram: 't.me/alya123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Martin',
        email: 'martin@cat.com',
        password: '1',
        avatar: 'https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
        info: ' Люблю животных ',
        profession: 'Айболит',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Армения',
        admin: false,
        telegram: 't.me/martincat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Alice',
        email: 'alice@sexy.com',
        password: '1',
        avatar: 'https://www.svoiludi.ru/images/tb/626/bangkok-1270137101_w990h1000.jpg',
        info: 'Хочу переехать в Бангкок',
        profession: 'Гид',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Бангкок',
        admin: false,
        telegram: 't.me/BoryaBest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Masha',
        email: 'masha@mail.ru',
        password: '1',
        avatar: 'https://cdn.trinixy.ru/pics5/20170524/beautiful_girls_26.jpg',
        info: 'Море - моя сихия!',
        profession: 'Актриса театра и кино',
        birth_country: 'Россия',
        current_country: 'Мадейра',
        future_country: 'Алания',
        admin: false,
        telegram: 't.me/masha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Alysa',
        email: 'Alysa91@funny.com',
        password: '1',
        avatar: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/persones/_imported/2010431.jpg',
        info: ' Люблю классическую музыку ',
        profession: 'Доктор',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Армения',
        admin: false,
        telegram: 't.me/funny',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Borya',
        email: 'BoryaBest@sexy.com',
        password: '1',
        avatar: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/people/gregoire-ludig_reference.jpg',
        info: ' Застенчивый , но накаченный молодой человек',
        profession: 'Бодибилдер',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Лос-Анджелес',
        admin: false,
        telegram: 't.me/BoryaBest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Nastya',
        email: 'littleGirl@yashina.com',
        password: '1',
        avatar: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/people/1455863-1390864.jpg',
        info: ' Люблю смешные шутки и мальчиков с большими кошельками ',
        profession: 'Модель',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Монаков',
        admin: false,
        telegram: 't.me/littleGirl',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Artem',
        email: 'oMyGod@polkovnikov.com',
        password: '1',
        avatar: 'https://cinewest.ru/wp-content/uploads/2014/06/leonardo-di-kaprio-Copy.jpg',
        info: 'Люблю грязный юмор',
        profession: 'Фрилансер',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Дубай',
        admin: false,
        telegram: 't.me/polkovnikov93',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Olga',
        email: 'skromnya777@pavlova.com',
        password: '1',
        avatar: 'https://otvet.imgsmail.ru/download/283116618_fda024e88a340a4e4ec27ebca1c60d70_800.jpg',
        info: ' Фанатею от татуировок и мозгов ',
        profession: 'Юрист',
        birth_country: 'Россия',
        current_country: 'Мельбурн',
        future_country: 'Турция',
        admin: false,
        telegram: 't.me/skromnya777',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Seva',
        email: 'Pavlenko91@sevochka.com',
        password: '1',
        avatar: 'https://ladybu.ru/wp-content/uploads/2021/05/neverbalnye-priznaki-simpatii-1024x683.jpg',
        info: ' Обычный миллиардер с ангельским личиком ',
        profession: 'Бизнес-тренер',
        birth_country: 'Россия',
        current_country: 'Грузия',
        future_country: 'Турин',
        admin: false,
        telegram: 't.me/Pavlenko91',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Sergey',
        email: 'nikitin@bigpapa.com',
        password: '1',
        avatar: 'https://heaclub.ru/tim/959015e4346b42370f90f8d262383316/griffit.jpg',
        info: ' Мягкий человек, живу с мамой',
        profession: 'Библиотекарь',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Париж',
        admin: false,
        telegram: 't.me/bigpapa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Kirill',
        email: 'somova1@kira.com',
        password: '1',
        avatar: 'https://i.pinimg.com/originals/9c/6f/67/9c6f678178563c8bd1448ef18f1970a0.jpg',
        info: ' Люблю готовить и танцевать ',
        profession: 'Стриптезер',
        birth_country: 'Россия',
        current_country: 'Мельбурн',
        future_country: 'Каир',
        admin: false,
        telegram: 't.me/veryhotMoscow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Polina',
        email: 'gorbatova@polya.com',
        password: '1',
        avatar: 'https://nevsepic.com.ua/uploads/posts/2011-04/1303553495_olga-kurylenko147_www.nevseoboi.com.ua.jpg',
        info: ' Безумно красивая, но глупая девушка ',
        profession: 'Фриланс',
        birth_country: 'Россия',
        current_country: 'Тбилиси',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/gorbatova',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Stepan',
        email: 'rarnov@stepa.com',
        password: '1',
        avatar: 'http://www.rewizor.ru/files/48611izts.jpg',
        info: ' Собираю древние монеты и карточки покемонов ',
        profession: 'Программист',
        birth_country: 'Россия',
        current_country: 'Тбилиси',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/rarnov777',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Nikita',
        email: 'svetlov40@Nik.com',
        password: '1',
        avatar: 'https://i.sunhome.ru/dreamer/151/vozlyublennyiy.xxl.jpg',
        info: ' Люблю аниме ',
        profession: 'Дальнобойщик',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/svetlov98',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Tamara',
        email: 'tomchik@stressova.com',
        password: '1',
        avatar: 'https://www.kino-teatr.ru/news/16528/148869.jpg',
        info: ' Увлекаюсь стрельбой из лука ',
        profession: 'балерина',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/stressova',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Vera',
        email: 'Vera@panina.com',
        password: '1',
        avatar: 'https://ka-ap.ru/wp-content/uploads/d/3/a/d3a8dcae2767aef0d76100e123c331d4.jpeg',
        info: ' Меня сложно найти и легко потерять ',
        profession: 'Учитель',
        birth_country: 'Россия',
        current_country: 'Тбилиси',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/verochka',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Filip',
        email: 'Fil@gorodnov.com',
        password: '1',
        avatar: 'https://cinewest.ru/wp-content/uploads/2021/09/gollivudskie-aktery-imena-proiznosim-nepravilno-11-eshton-kutcher.jpg',
        info: ' Люблю выносить мозг любимой ',
        profession: 'Строитель',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/perchik',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Elena',
        email: 'egorova@lena.com',
        password: '1',
        avatar: 'http://almode.ru/uploads/posts/2021-03/1617032446_1-p-aktrisa-yelena-podkaminskaya-1.jpg',
        info: ' Люблю собирать пазлы ',
        profession: 'Адвокат',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/egorova',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Denis',
        email: 'denchik@volya.com',
        password: '1',
        avatar: 'https://horrorzone.ru/uploads/1-wallpapers/wallpapers-persons/j/jensen-ackles/jensen-ackles02.jpg',
        info: ' Люблю путешествовать по восточной Европе ',
        profession: 'Дизайнер',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/denchik',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Kate',
        email: 'katenka@error.com',
        password: '1',
        avatar: 'https://mykaleidoscope.ru/uploads/posts/2022-06/1654673955_38-mykaleidoscope-ru-p-kare-na-krupnoe-litso-devushka-krasivo-fot-41.jpg',
        info: ' Увлекаюсь выращиванием цветов на даче ',
        profession: 'медсестра',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/docipoki',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Anton',
        email: 'mcanton@rap21.com',
        password: '1',
        avatar: 'https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-image-fdd61997-462c-4211-b606-8aef28897f6b&mb=webpulse',
        info: ' Жизнь это рэп и я в ней Эминем ',
        profession: 'музыкант',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Анталия',
        admin: false,
        telegram: 't.me/mcanton',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Nona',
        email: 'spasiboZaReact2022@nonchik.com',
        password: '1',
        avatar: 'https://corsairs-bay.ucoz.ru/_fr/3/3569974.jpeg',
        info: ' Изучаю Реакт медленно и с проблемами ',
        profession: 'Повар',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Тбилиси',
        admin: false,
        telegram: 't.me/nonchik',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Eva',
        email: 'longoria@Eva.com',
        password: '1',
        avatar: 'https://avrorra.com/wp-content/uploads/2019/02/post_5c586f6088802.jpg',
        info: ' Пять раз  была замужем ',
        profession: 'тренер по фигурному катанию',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Тбилиси',
        admin: false,
        telegram: 't.me/longoriaIce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'David',
        email: 'davidik@rus.com',
        password: '1',
        avatar: 'https://cdn.intesense.ru/wp-content/uploads/2018/05/2018-05-29_17-56-35_993615.jpg',
        info: ' Покатаю на своем байке ',
        profession: 'Бармен',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Тбилиси',
        admin: false,
        telegram: 't.me/motoBike',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Tanya',
        email: 'Tanya@pogodkina.com',
        password: '1',
        avatar: 'https://canadagoose-store.ru/wp-content/uploads/4/e/9/4e96474bf8005636d9e3c51a51cae7b3.jpeg',
        info: ' Фанат юмора Антона Алексеевича ',
        profession: 'Логист',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Тбилиси',
        admin: false,
        telegram: 't.me/pogodkina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Tapac',
        email: 'Tapac@42.com',
        password: '1',
        avatar: 'https://i.pinimg.com/originals/95/1c/59/951c596c51cc2ed9dc0637effa7f0b5a.jpg',
        info: ' Пересматриваю лекции Антона Алексеевича ',
        profession: 'Певец',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Тбилиси',
        admin: false,
        telegram: 't.me/tapac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Isa',
        email: 'sila@isa.com',
        password: '1',
        avatar: 'https://www.startfilm.ru/images/base/person/21_03_14/17931_pine_n0qsvrjdju1qhlfm8o1_1280.jpg',
        info: ' Спорт мое все ',
        profession: 'Футболист',
        birth_country: 'Россия',
        current_country: 'Россия',
        future_country: 'Тбилиси',
        admin: false,
        telegram: 't.me/sila',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

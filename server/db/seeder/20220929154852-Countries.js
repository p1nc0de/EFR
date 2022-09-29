/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [
      {
        name: 'Турция',
        description: 'Турция – это не только солнце, пляжи и дискотеки, но и древняя культура. В этой стране есть такие архитектурные памятники, на которые необходимо посмотреть даже людям, побывавшим в Элладе или Китае.Турция – это страна, в которой мечтают провести свой отдых миллионы жителей нашей планеты. Для кого-то эта мечта воплощается в реальность, кому-то везет меньше, но факт остается фактом: Турция – это рай на земле. Турция может похвастаться продолжительным купальным сезоном. Турецкие пляжи ждут отдыхающих с первых чисел мая и вплоть до ноябрьских праздников. Именно в этот период температура воздуха устанавливается на отметке + 30 градусов. Кроме того, Турция знаменита и зимним отдыхом. Горнолыжные туры в Турцию пользуются популярностью как у новичков, так и у профессиональных спортсменов. Сегодня Турция современная западная страна, член НАТО и ООН, играющая заметную роль на мировой арене и, особенно, в Западной Азии и Средиземноморье.Турция - страна неповторимого гостеприимства и искренних добрых людей. Быть может, знакомство с новыми друзьями и общение будет самым волнующим в Вашем путешествии. Здесь Вы соприкоснётесь с самой Историей, которая живёт в реликвиях и памятниках разных эпох. Хетты и урарту, фригийцы и ликийцы, величественные римские амфитеатры, сохранившиеся древние христианские храмы Византии и изящные минареты мечетей. А сколько красоты и романтики таят в себе названия древних городов - Троя, Бергама, Эфес, Дидим, Аспендос, Афродисия, Перге. Бесчисленные легенды окружают Вас повсюду. Наряду с этим "ночная жизнь" курортных городов с разнообразием баров, дискотек, ресторанов и экзотических шоу, в которых прекрасные танцовщицы виртуозно исполняют знаменитый "танец живота", делают Турцию одним из излюбленных курортов для туристов всего мира. Мы советуем выбрать Турцию местом вашего отдыха по многим причинам, одна из которых - огромный выбор прекрасных гостиниц с широким спектором услуг и отличным сервисом на любой вкус и кошелек.',
        currency: 'TRY - турецкая лира ',
        language: 'турецкий язык',
        religion: '98 % турок - мусульмане, т.е. исповедуют ислам.',
        gdp: 815,
        apartment_url: 'https://www.ataberkestate.com',
        insurance_url: 'https://savitar-gr.com/countries/turkey/',
        visa: false,
        without_visa: 'Не более 90 дней в течение полугода.',
        visa_url: 'https://ru.goc.gov.tr',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Грузия',
        description: 'Грузия - независимое государство, расположенное на юго-востоке Европы, на восточном берегу Черного моря. Общая площадь страны - 69 700 кв. км, граничит с Россией на севере, Азербайджаном на юго-востоке, Турцией и Арменией на юге. Грузия - президентская республика, во главе которой стоит президент, а законодательная власть представлена в виде однопалатного парламента. Столица Грузии - Тбилиси. Расположенный на берегу реки Мтквари, это не только самый крупный город страны, но и важнейший промышленный, социальный и культурный центр государства. В 220 километрах от столицы расположен город Кутаиси, известный своими архитектурными памятниками, включенными в Список Всемирного Наследия ЮНЕСКО. На юге страны расположился приморский город-порт Батуми - главный туристический центр современной Грузии.',
        currency: 'GEL - грузинский лари ',
        language: 'Государственный язык - грузинский. Многие говорят на армянском и русском.',
        religion: 'Большая часть населения исповедует православие. Второй по значению религией является ислам - его исповедуют 10% населения (около 400.000 человек).',
        gdp: 18.7,
        apartment_url: 'https://tranio.ru/georgia',
        insurance_url: 'https://www.city24.ge/ru/georgia/catalogue/banks-finance-insurance/insurance-companies',
        visa: false,
        without_visa: ' Срок разрешённого пребывания без визы — 1 год.',
        visa_url: ' https://pbservices.ge/%D0%B2%D0%BD%D0%B6-%D0%B2-%D0%B3%D1%80%D1%83%D0%B7%D0%B8%D0%B8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};

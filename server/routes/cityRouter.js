const axios = require('axios');
const express = require('express');
const {
  City, Cost, Photo, User, Review,
} = require('../db/models');

const router = express.Router();
const upload = require('../middlewares/multer');

router.get('/', async (req, res) => {
  try {
    const allCities = await City.findAll({ include: Cost });
    res.json(JSON.parse(JSON.stringify(allCities)));
  } catch (e) {
    console.log(e);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneCity = await City.findOne({ where: { id }, include: Cost });
    res.json(JSON.parse(JSON.stringify(oneCity)));
    // console.log(allCities);
  } catch (e) {
    console.log(e);
  }
});

router.get('/country/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(City);
    const countryCities = await City.findAll({ where: { country_id: id } });
    // console.log('=======>', countryCities);
    res.json(countryCities);
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id/photos', async (req, res) => {
  try {
    const { id } = req.params;

    const allPhotoCurrCity = await Photo.findAll({ where: { city_id: id }, include: User, order: [['id', 'DESC']] });
    console.log('current city photos ====>>>>>', allPhotoCurrCity);
    res.json(JSON.parse(JSON.stringify(allPhotoCurrCity)));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/:id/photos', upload.single('photo'), async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const { userId } = req.session;
    // console.log(req.file);
    // загрузили фото
    const currPhoto = await Photo.create({
      // в объекте req.file взяли тот ключ, который нам нужен

      photo: req.file.filename,
      description,
      user_id: userId,
      city_id: id,
    });

    const photoWithAllInfo = await Photo.findOne({ where: { id: currPhoto.id }, include: User });
    return res.json(photoWithAllInfo);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.route('/:id/reviews')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const cityReviews = await Review.findAll({ where: { city_id: id }, order: [['id', 'DESC']], include: User });
      res.json(JSON.parse(JSON.stringify(cityReviews)));
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res) => {
    try {
      const { input, city_id } = req.body;
      const { userId } = req.session;
      const { id } = city_id;
      const newReview = await Review.create({ review: input, user_id: userId, city_id: id });
      // const { login } = req.session.user
      // const { input } = req.body;
      // const newReview = await Review.create({ review: input, id: req.session.userId, login })
      res.json(newReview);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await Review.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

router.get('/currency', async (req, res) => {
  try {
    const { curr } = req.body;
    console.log('currrrrrrr', curr);
    const resp = await axios('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency', {
      params: { have: 'USD', want: `${curr}`, amount: '1' },
      headers: {
        'X-RapidAPI-Key': '1b7d5bba64msh7c9d3f71bf84163p16e835jsna426236a6792',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
      },
    });
    const currToCurr = resp.data;
    console.log(currToCurr);
    res.json(currToCurr);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

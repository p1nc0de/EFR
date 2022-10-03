// const axios = require('axios');
const express = require('express');
const {
  City, Cost, Photo, User,
} = require('../db/models');

const router = express.Router();
const upload = require('../middlewares/multer');

router.get('/', async (req, res) => {
  try {
    const allCities = await City.findAll({ include: Cost });
    res.json(JSON.parse(JSON.stringify(allCities)));
    // console.log(allCities);
  } catch (e) {
    console.log(e);
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const oneCity = await City.findByPk({ where: { id } });
//     console.log(oneCity);
//     res.json(oneCity);
//   } catch (e) {
//     console.log(e);
//   }
// });
router.get('/country/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(City);
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

    const allPhotoCurrCity = await Photo.findAll({ where: { city_id: id }, include: User });
    // console.log(allPhotoCurrCity);
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

module.exports = router;

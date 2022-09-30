const router = require('express').Router();
// const path = require('path');
const { Photo } = require('../db/models');

const upload = require('../middlewares/multer');

router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { description } = req.body;
    const { userId } = req.session;
    const createdPhoto = await Photo.create({
      photo: req.file.path.replace('public', ''), description, user_id: userId, city_id: 'CITY ГДЕ?',
    });
    return res.json(createdPhoto);
  } catch (error) {
    console.log(error);
    return res.write({
      message: 'Не удалось загрузить фото',
    }).sendStatus(500);
  }
});

module.exports = router;

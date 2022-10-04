/* eslint-disable camelcase */
const express = require('express');
const { User } = require('../db/models');
const upload = require('../middlewares/multer');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    res.json(user);
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    const {
      login, info, profession, birth_country, current_country, future_country, telegram,
    } = req.body;
    user.login = login;
    user.info = info;
    user.profession = profession;
    user.birth_country = birth_country;
    user.current_country = current_country;
    user.future_country = future_country;
    user.telegram = telegram;
    await user.save();
    return res.json(user);
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      await User.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

router.patch('/:id/avatar', upload.single('avatar'), async (req, res) => {
  try {
    const { id } = req.params;
    console.log('ПАРАМС', req.params);
    console.log('back1111111111111!!!!!!', id);
    const user = await User.findOne({ where: { id } });
    console.log('back!!!!!!', user);
    user.avatar = req.file.filename;
    // user.avatar = req.file?.path.replace('public', '') || null;
    await user.save();
    return res.json(user);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

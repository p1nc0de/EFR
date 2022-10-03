const express = require('express');
const { User } = require('../db/models');

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
      login, avatar, info, profession, birthCountry, currentCountry, futureCountry, telegram,
    } = req.body;
    user.login = login;
    user.avatar = avatar;
    user.info = info;
    user.profession = profession;
    user.birth_country = birthCountry;
    user.current_country = currentCountry;
    user.future_country = futureCountry;
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

module.exports = router;

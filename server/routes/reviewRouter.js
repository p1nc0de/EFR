// const axios = require('axios');
const express = require('express');
const {
  Review,
} = require('../db/models');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const allReviews = await Review.findAll({ where: { city_id: id } });
      // res.json(JSON.parse(JSON.stringify(allCities)));
      res.json(allReviews);
      console.log(allReviews);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res) => {
    try {
      // нужно как-то передавать сити айди , юзер айди будем доставать из сессии
      const { input } = req.body;
      console.log(input);
      const newReview = await Review.create({ review: input });
      // const { login } = req.session.user
      // const { input } = req.body;
      // const newReview = await Review.create({ review: input, id: req.session.userId, login })
      res.json(newReview);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = router;

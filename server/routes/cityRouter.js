// const axios = require('axios');
const express = require('express');
const { City } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allCities = await City.findAll({ raw: true });
    console.log(allCities);
    res.json(allCities);
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneCity = await City.findByPk({ where: { id } });
    console.log(oneCity);
    res.json(oneCity);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

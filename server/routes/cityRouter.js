// const axios = require('axios');
const express = require('express');
const { City, Cost } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allCities = await City.findAll({ include: Cost });
    res.json(JSON.parse(JSON.stringify(allCities)));
    console.log(allCities);
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

const { Router } = require('express');
const { readData } = require('../service/readData');
const getRoute = Router();

getRoute.get('/', async (req, res) => {
  const data = await readData('data.json');
  res.send({ success: true, data });
});

module.exports = getRoute;

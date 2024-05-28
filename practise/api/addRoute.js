const { Router } = require('express');
const { readData } = require('../service/readData');
const addRoute = Router();
const fs = require('fs/promises');
const writeData = require('../service/writeData');

addRoute.post('/', async (req, res) => {
  const response = await readData('data.json');
  req.query.id = response[response.length - 1]?.id + 1 || 0;
  response.push(req.query);
  await writeData(response);
  res.send({ succes: true });
});

module.exports = addRoute;

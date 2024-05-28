const { Router } = require('express');
const { readData } = require('../service/readData');
const writeData = require('../service/writeData');
const editRoute = Router();

editRoute.put('/', async (req, res) => {
  const response = await readData('data.json');
  const id = Number(req.query.id);
  const obj = response.find((el) => el.id === id);
  obj.name = req.query.name;
  obj.age = req.query.age;
  await writeData(response);
  if (!obj) {
    res.send({ success: false });
    return;
  }
  res.send({ succes: true });
});

module.exports = editRoute;

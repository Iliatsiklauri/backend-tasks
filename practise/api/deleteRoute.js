const { Router } = require('express');
const { readData } = require('../service/readData');
const writeData = require('../service/writeData');
const deleteRouter = Router();

deleteRouter.delete('/', async (req, res) => {
  const response = await readData('data.json');
  try {
    const filtered = response.filter((el) => el.id !== Number(req.query.id));
    console.log(filtered);
    await writeData(filtered);
  } catch (er) {
    console.log('something is wrong');
  }
  res.send({ success: true });
});

module.exports = deleteRouter;

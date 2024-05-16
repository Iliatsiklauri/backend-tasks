const { Router } = require('express');
const apiRouter = Router();
const userLoger = require('../middlewares/userLoger');
const deleteRouter = require('./Delete/deleteRouter');
const fs = require('fs/promises');

apiRouter.get('/', userLoger, async (req, res) => {
  const response = await fs.readFile('data.json', 'utf-8');
  const data = JSON.parse(response);
  res.render('pages/home.ejs', { data });
});

apiRouter.use('/delete', deleteRouter);

module.exports = apiRouter;

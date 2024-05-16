const express = require('express');
const apiRouter = require('./api/apiRouter');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log('server is live');
});

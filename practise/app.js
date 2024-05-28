const express = require('express');
const apiRouter = require('./api/apiRoute');
const app = express();
const PORT = 3000;

app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log('server is live');
});

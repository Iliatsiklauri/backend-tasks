const { Router } = require('express');
const getRoute = require('./getRoute');
const deleteRouter = require('./deleteRoute');
const addRoute = require('./addRoute');
const editRoute = require('./editRoute');
const apiRouter = Router();

apiRouter.use('/get', getRoute);
apiRouter.use('/delete', deleteRouter);
apiRouter.use('/add', addRoute);
apiRouter.use('/edit', editRoute);

module.exports = apiRouter;

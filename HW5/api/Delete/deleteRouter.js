const { Router } = require('express');
const deleteRouter = Router();
const fs = require('fs/promises');

deleteRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
});

module.exports = deleteRouter;

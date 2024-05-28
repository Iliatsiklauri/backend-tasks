const fs = require('fs/promises');

const readData = async (path) => {
  const res = await fs.readFile(path, 'utf-8');
  const data = JSON.parse(res);
  return data;
};

module.exports = {
  readData,
};

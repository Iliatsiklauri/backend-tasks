const fs = require('fs/promises');

const writeData = async (content) => {
  await fs.writeFile('data.json', JSON.stringify(content));
};
module.exports = writeData;

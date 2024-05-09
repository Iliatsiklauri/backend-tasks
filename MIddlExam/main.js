#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const { returnData } = require('./utils/read');
const fs = require('fs/promises');

program.command('show').action(async () => {
  const data = await returnData('data.json');
  console.log(data);
});

program
  .command('add')
  .argument('<total>', 'amount of the expense')
  .argument('<category>', 'category of the expense')
  .action(async (amount, category) => {
    const data = await returnData('data.json');
    let obj = {
      id: data[data.length - 1]?.id + 1 || 0,
      total: amount,
      category,
      date: new Date().toISOString(),
    };
    data.push(obj);
    await fs.writeFile('data.json', JSON.stringify(data));
  });

program
  .command('delete')
  .argument('<id>', 'id of the expense')
  .action(async (id) => {
    const data = await returnData('data.json');
    const newData = data.filter((item) => item.id !== parseInt(id));
    await fs.writeFile('data.json', JSON.stringify(newData));
  });

program
  .command('search')
  .argument('<category>', 'finds by category')
  .action(async (category) => {
    const data = await returnData('data.json');
    const newData = data.filter((item) => item.category === category);
    console.log(newData);
  });

program.command('reset').action(async () => {
  await fs.writeFile('data.json', JSON.stringify([]));
});

program.parse();

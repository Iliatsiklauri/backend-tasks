#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const fs = require('fs/promises');
const { returnData } = require('./utils/read');

program.command('show').action(async () => {
  const response = await returnData('expenses.json');
  console.log(response);
});

program
  .command('deposit')
  .description('add a new expense')
  .argument('<amount>', 'money amount')
  .action(async (amount) => {
    const response = await returnData('expenses.json');
    const obj = {
      amount,
      time: new Date().toISOString(),
      id: response[response.length - 1]?.id + 1 || 0,
    };

    response.push(obj);
    const intoJson = JSON.stringify(response);
    await fs.writeFile('expenses.json', intoJson);
  });
program
  .command('delete')
  .description('delete selected expense')
  .argument('<id>', 'id that will be deleted')
  .action(async (id) => {
    let data = await returnData('expenses.json');
    if (!data.some((el) => Number(el.id) === Number(id))) {
      console.log(`no expense is available with the id of ${id} `);
      return;
    }
    const index = data.indexOf(data.find((el) => el.id == id));
    data.splice(index, 1);
    await fs.writeFile('expenses.json', JSON.stringify(data));
  });

program.parse();

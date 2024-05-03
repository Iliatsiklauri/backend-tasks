#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const axios = require('axios');

program
  .command('weather')
  .argument('<city>', 'city you want to see weather of')
  .action(async (city) => {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
        )
        .then((res) => console.log('weather in', city, 'is', res.data.main.temp));
    } catch (er) {
      console.log('invalid city');
    }
  });
program.parse();

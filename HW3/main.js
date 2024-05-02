// exercise 1

const http = require('http');
const url = require('url');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url);
  const data = await fs.readFile('data.json', 'utf-8');
  const html = await fs.readFile('index.html', 'utf-8');
  const currentTime = new Date().toISOString();
  switch (parsedUrl.pathname) {
    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
      break;
    case '/html':
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
      break;
    case '/time':
      res.end(currentTime);
      break;
    default:
      res.end('Not found');
  }
});

server.listen('3000', () => {
  console.table('server started');
});

// exercise 2

const server2 = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url);
  const respone = await fs.readFile('movies.json', 'utf-8');
  const moviesData = JSON.parse(respone);
  const randomMovieNumber = Math.floor(Math.random() * 10);
  const obj = JSON.stringify(moviesData[randomMovieNumber]);

  if (parsedUrl.pathname === '/movies') {
    res.end(obj);
  } else if (parsedUrl.pathname === '/random') {
    let randomNum = Math.floor(Math.random() * 1000);
    const arr = randomNum.toString().split('');
    const boolean = arr.every((i) => i == arr[0]);
    if (boolean) {
      res.write('good job , you won jackpot ');
      res.write(JSON.stringify(randomNum));
    }
    res.end(JSON.stringify(randomNum));
  } else {
    res.end('not found');
  }
});

server2.listen('2000', () => {
  console.log('server started');
});

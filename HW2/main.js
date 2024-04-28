const path = require('path');

const fs = require('fs/promises');

const http = require('http');

// 1

// async function main(url) {
//   const norm = path.normalize(url);
//   const base = path.basename(norm);
//   const direct = path.dirname(norm);
//   const extension = path.extname(norm);
//   console.log(base, direct, extension);
// }
// main('C:/Users/tsikl/OneDrive/Desktop/BackEnd/HW2/main.js');

//2

// async function checkIfInRoot(folderName) {
//   const directories = await fs.readdir('../HW2');
//   console.log(directories.includes(folderName));
// }
// checkIfInRoot('gela');

//3 ,4 ,5

// const server = http.createServer(async (req, res) => {
//   const users = await fs.readFile('users.json');
//   const table = await fs.readFile('index.html');
//   res.setHeader('Content-Type', 'Application/json');

//   if (req.url === '/users') {
//     res.end(users);
//   } else if (req.url === '/realtime') {
//     const time = new Date().toISOString();
//     res.end(time);
//   } else if (req.url === '/table') {
//     res.end(table);
//   }
// });

// server.listen(3000, 'localhost', () => {
//   console.log('server started');
// });

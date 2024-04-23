// read data from 2 difference files then write it into one file
// write a random text in file then read this data and count how many words are there
// read users json data then filter them older than 18 years and rewrite this data

const fs = require('fs/promises');

// ex1

// async function combine() {
//   try {
//     const data1 = await fs.readFile('file1.txt', 'utf-8');
//     const data2 = await fs.readFile('file2.txt', 'utf-8');
//     fs.writeFile('file3.txt', data1 + ' ' + data2, (err, data) => {
//       if (err) {
//         console.log(er);
//       }
//       console.log(data);
//     });
//   } catch (er) {
//     console.log(er);
//   }
// }
// combine();

// ex2

// async function countWords() {
//   const data = (await fs.readFile('randomtext.txt', 'utf-8')).split(' ');
//   console.log('words count :' + data.length);
// }
// countWords();

// ex3

// async function rewriteJSon() {
//   try {
//     const response = await fs.readFile('data.json', 'utf8');
//     const data = JSON.parse(response);
//     const final = JSON.stringify(data.filter((el) => el.age > 18));
//     fs.writeFile('data.json', final, (err, succes) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(succes);
//     });
//   } catch (er) {
//     console.log(er);
//   }
// }
// rewriteJSon();

const fs = require(`fs`);
const path = require(`path`);

const data = `This is a sample string`;

const folder = path.resolve(`C:/Users/Yogesh Tomar/Desktop/JS/sample.txt`);

// Synchronous example
// fs.writeFileSync(folder, data, {
//   encoding: `utf-8`,
//   flag: `a`,
//   //   flush:`true`
// });

// Callback example
fs.writeFile(`sample.txt`)

// console.log(`File written successfully!!!`);

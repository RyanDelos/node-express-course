const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', {
  hightWaterMark: 200,
  encoding: 'utf8',
});

let counter = 0;

stream.on('data', (result) => {
  counter++;
  console.log(`Result: ${result}`);
});

stream.on('end', () => {
  console.log(`Chunks received: ${counter}`);
});

stream.on('error', (err) => {
  console.log(`Error: ${err}`);
});

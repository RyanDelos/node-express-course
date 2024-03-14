const { writeFile, readFile } = require('fs').promises;

writeFile('../content/temp.txt', 'This is line 1 \n')
  .then(() => {
    console.log('line 1 written');
    return writeFile('../content/temp.txt', 'This is line 2 \n', { flag: 'a' });
  })
  .then(() => {
    console.log('line 2 written');
    return writeFile('../content/temp.txt', 'This is line 3 \n', { flag: 'a' });
  })
  .then(() => {
    console.log('line 3 written');
    return readFile('../content/temp.txt', 'utf-8');
  })
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((error) => {
    console.log('An error occurred: ', error);
  });

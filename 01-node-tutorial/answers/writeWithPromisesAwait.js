const { writeFile, readFile } = require('fs').promises;

const writer = async () => {
  try {
    for (let i = 0; i < 3; i++) {
      await writeFile('../content/temp.txt', `some text ${i}\n`, { flag: 'a' });
    }
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  const data = await readFile('../content/temp.txt', 'utf-8');
  console.log(`${data}`);
};

const readWrite = async () => {
  await writer();
  await reader();
};

readWrite();

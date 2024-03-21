// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only Share minimum)

const names = require('./04-name');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');

console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

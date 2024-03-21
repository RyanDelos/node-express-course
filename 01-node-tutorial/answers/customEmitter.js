const EventEmitter = require('events');
const emitter = new EventEmitter();

// Timer
setInterval(() => {
  emitter.emit('timer', 'Time event');
}, 2000);
emitter.on('timer', (msg) => console.log(msg));

// Async function waits for event
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on('happens', (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log('We got an event! Here it is: ', msg);
};

doWait();
emitter.emit('happens', 'Event is happening :)');

// Emitting and handling several events
emitter.on('hi', (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit('hello', 'Ryan');

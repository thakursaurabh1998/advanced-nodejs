import { EventEmitter } from 'events';
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new EventEmitter();

rl.on('line', (input: string) => {
  client.emit('input', input);
});

export default client;

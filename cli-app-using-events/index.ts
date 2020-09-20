import { EventEmitter } from 'events';
import server from './server';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new EventEmitter();

rl.on('line', (input: string) => {
  client.emit('input', input);
});

export default (): EventEmitter => {
  server(client).on('response', (resp) => {
    console.clear();
    process.stdout.write(resp);
    process.stdout.write('\n\> ');
  });
  return client;
};

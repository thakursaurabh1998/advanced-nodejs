import { EventEmitter } from 'events';
import server from './server';
import readline from 'readline';

const client = new EventEmitter();

export default (): EventEmitter => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on('line', (input: string) => {
    client.emit('input', input);
  });
  server(client).on('response', (resp) => {
    console.clear();
    process.stdout.write(resp);
    process.stdout.write('\n> ');
  });
  return client;
};

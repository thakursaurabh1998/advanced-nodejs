import { EventEmitter } from 'events';

class Server extends EventEmitter {
  constructor(client: EventEmitter) {
    super();
    client.on('input', (input) => {
      console.clear();
      const [command, option]: [string, string] = input.split(' ');
      const commandMap: { [key: string]: Function } = {
        add: this.add,
        ls: this.ls,
        help: this.help,
        delete: this.delete,
      };
      if (commandMap[command]) {
        commandMap[command](option);
      } else {
        console.warn(`Command "${command}" not found`);
      }
    });
  }

  add(option: string) {
    this.emit('response');
  }

  ls() {
    this.emit('response');
  }

  help() {
    this.emit('response');
  }

  delete(option: string) {
    this.emit('response');
  }
}

export default function init(client: EventEmitter) {
  console.info('Server listening');
  return new Server(client);
}

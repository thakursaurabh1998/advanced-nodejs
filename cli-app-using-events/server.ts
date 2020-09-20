import { EventEmitter } from 'events';

export class Server extends EventEmitter {
  tasks: string[] = [];
  constructor(client: EventEmitter) {
    super();
    // This was required because the listener won't be
    // there until the instantiation finishes
    process.nextTick(() => {
      this.emit('response', 'Type a command (help to list commands)');
    });
    client.on('input', (input) => {
      const [command, ...args]: [string, string] = input.split(' ');
      switch (command) {
        case 'add':
        case 'ls':
        case 'help':
        case 'delete':
          this[command](args);
          break;
        default:
          this.emit('response', `Command "${command}" not found`);
      }
    });
  }

  add(args: string[]) {
    const task = args.join(' ');
    const taskId = this.tasks.push(task);
    this.emit('response', `Task ${task} added with id : ${taskId}`);
  }

  ls() {
    const taskList = this.tasks.map(
      (task, taskId) => `${taskId + 1}\t: ${task}`
    );
    taskList.unshift('TaskID\t  Task');
    this.emit('response', taskList.join('\n'));
  }

  help() {
    this.emit('response');
  }

  delete(args: string[]) {
    const [task] = this.tasks.splice(Number(args[0]) - 1, 1);
    this.emit('response', `${task} task was deleted`);
  }
}

export default function init(client: EventEmitter) {
  return new Server(client);
}

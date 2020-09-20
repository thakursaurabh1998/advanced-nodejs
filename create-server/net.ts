import net, { Socket } from 'net';

export default function init() {
  console.clear();

  const server = net.createServer();
  const sockets = new Map<string, Socket>();

  function getTimestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  function broadcastMessage(socketId: string, data: String) {
    for (let socket of sockets.entries()) {
      const [id, clientSocket] = socket;
      if (id === socketId) {
        continue;
      }

      // socket writing assumes that the data (currently is buffer) being sent is utf-8
      // to override the encoding, pass the required encoding as second parameter
      clientSocket.write(`[${getTimestamp()}] ... ${socketId}: ${data}\n`);
    }
  }

  // creates a server which accepts connections
  server.on('connection', (socket: Socket): void => {
    console.log('client connected');

    socket.write('Welcome, please enter your username: ');

    let userId = '';
    socket.on('data', (data: Buffer) => {
      const message = data.toString().split('\n')[0];
      if (!userId) {
        userId = message;
        sockets.set(userId, socket);
        socket.write(`Hey ${userId}! You are in...\n`);
        broadcastMessage(userId, 'Has joined the chat!');
        return;
      }
      console.log(`Received message from userID: ${userId}`);
      broadcastMessage(userId, message);
    });

    socket.on('end', () => {
      sockets.delete(userId);
      broadcastMessage(userId, 'Has left the chat!');
    });
  });
  server.listen(8000, () => console.log('Server bound'));
}

// importing datagram
import dgram from 'dgram';

import * as client from './client';

const server = dgram.createSocket('udp4');
export const SERVER_PORT = 3333;
export const SERVER_HOST = '127.0.0.1';

server.on('listening', () => {
  console.log('UDP server listening');
});

server.on('message', (msg, remoteInfo) => {
  console.log('UDP message received', { msg: msg.toString(), remoteInfo });
});

export default () => {
  server.bind(SERVER_PORT, SERVER_HOST);
  client.init();
};

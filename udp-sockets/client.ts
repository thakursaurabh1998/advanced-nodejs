import dgram from 'dgram';
import { setInterval } from 'timers';

import { SERVER_HOST, SERVER_PORT } from './index';

export function init() {
  // generate and send message every second
  setInterval(() => {
    const client = dgram.createSocket('udp4');

    const msg = 'Sending a UDP packet';

    // We are sending a buffer here so we can decide how much of it we want to send
    // We can also send data in multiple UDP Packets
    client.send(Buffer.from(msg), 0, 11, SERVER_PORT, SERVER_HOST, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.info('UDP message sent');
      client.close();
    });
  }, 1000);
}

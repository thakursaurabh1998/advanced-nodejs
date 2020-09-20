import client from './client';

import server from './server';

server(client);

export default () => {
  server(client);
};

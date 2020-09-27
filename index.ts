import event from './cli-app-using-events';
import dns from './dns';
import net from './create-server/net';
import udpSockets from './udp-sockets';
import http from './web/http';
import request from './web/request';
// import nodeAddon from './node-addon';

const subdir = process.argv[2];
const subDirMap: { [key: string]: Function } = {
  event,
  net,
  dns,
  udpSockets,
  http,
  request,
};
if (subDirMap[subdir]) {
  subDirMap[subdir]();
} else {
  console.warn(`Subdir ${subdir} project not found`);
}

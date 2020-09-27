import http, { IncomingMessage, ServerResponse } from 'http';

function homeController(req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ hello: 'world' }));
}

function aboutController(req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ about: 'me' }));
}

const server = http.createServer((req, res) => {
  const route = req.url || '/404';
  const routeMap = new Map<string, Function>();
  routeMap.set('/', homeController);
  routeMap.set('/about', aboutController);

  const controller = routeMap.get(route);
  if (controller) {
    controller(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
  console.log(req.url, req.method, res.statusCode);
});

export default () => {
  server.listen(8000);
};

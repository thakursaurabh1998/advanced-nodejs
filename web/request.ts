import http from 'http';

function genericRequest() {
  const req = http.request({ hostname: 'http://api.github.com' }, (res) => {
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  });

  req.on('error', console.error);
  req.end();
}

function getRequest() {
  const req = http.get('http://api.github.com', (res) => {
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', (chunk: Buffer) => {
      console.log(chunk.toString());
    });
  });

  req.on('error', console.error);
}

export default () => {
    genericRequest();
    getRequest();
};

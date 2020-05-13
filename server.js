const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request received');
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.writeHead('Connection', 'keep-alive');
  // res.write('hello\n');
  res.end('ok');
})

server.listen(8088);

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('receive request')
//   console.log(req.headers);
//   res.write('hello\n');
//   res.end();
// })

// server.listen(8088)
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request received');
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`
<html maaa=a >
<head>
<style>
body div #myid{
  width:100px;
  background-color: #ff5000;
}
body div img{
  width:30px;
  background-color: #ff1111;
}
.test.ts {
  border: 1px solid #ccc;
}
</style>
</head>
<body>
  <div class="test ts">
    <img id="myid"/>
    <img />
  </div>
</body>
</html>
  `);
})

server.listen(8088);
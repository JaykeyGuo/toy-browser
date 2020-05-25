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
.background {
  display: flex;
  width: 800px;
  height: 600px;
  background-color: rgb(255,255,255);
}
.test {
  display: flex;
  width: 500px;
  height: 400px;
  background-color: rgb(253,226,30);
  justify-content: center;
  align-items: center;
}
.demo {
  display: flex;
  width: 200px;
  height: 100px;
  justify-content: center;
  background-color: rgb(25,255,255);
}
.demo2 {
  display: flex;
  width: 100px;
  height: 200px;
  background-color: rgb(255,215,255);
}
</style>
</head>
<body>
  <div id="id" class="background">
    <div class="test">
      <div class="demo"></div>
      <div class="demo2"></div>
    </div>
    <img id="myid"/>
    <img />
  </div>
</body>
</html>
  `);
})

server.listen(8088);
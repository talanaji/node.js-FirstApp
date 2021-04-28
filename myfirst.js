// define HTTP module, and is able to create a server 
var http = require('http');

//define createServer function and set port number for server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
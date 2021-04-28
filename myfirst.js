// define HTTP module, and is able to create a server 
var http = require('http');

// include my own module 
var dt = require('./myfirstmodule');

//define createServer function and set port number for server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
//try to use function of my module
  res.write("The date and time are currently: " + dt.myDateTime());

  res.end('Hello World!');
}).listen(8080);
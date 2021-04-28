// define HTTP module,allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
var http = require('http');

//include url built-in module to split the query string 
var url= require('url');

// include my own module 
var dt = require('./myfirstmodule');

//create an HTTP server that listens to server ports and gives a response back to the client.
http.createServer(function (req, res) {
//	define that the response from the HTTP server is supposed to be displayed as HTML, so we define HTTP header and give it the  status code and an object containing the response headers
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
//try to use function of my module
  res.write("The date and time are currently: " + dt.myDateTime()+"</br>");
  res.write(req.url);
  res.write('</br>');
  var q = url.parse(req.url, true).query;
  var txt = q.year +" "+q.month; 
  res.write(txt);
  res.end();
}).listen(8080);
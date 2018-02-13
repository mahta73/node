const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200); // everything is ok
  res.write('response body'); // we are writing the response body
  res.end(); // closing the connection
}).listen(8080); // listening for connection on this port

console.log('connecting, listening on port 8080');

// node do.js
// curl http://localhost:8080

// events -> request, connection, close

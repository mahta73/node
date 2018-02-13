const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200); // everything is ok
  setTimeout( function() {
    res.write('is running');
    res.end();
    }
    , 5000);
}).listen(8080); // listening for connection on this port

console.log('connecting, listening on port 8080');

// node do.js
// curl http://localhost:8080

// events -> request, connection, close

  /*
    What is websocket?
      websockets are another protocol(inside of your webbroser, forexample good for chat apps).
      WebSocket is a computer communications protocol,
      providing full-duplex communication channels over a single TCP connection.
      They allow a long-held single TCP socket connection to be established between
      the client and server which allows for bi-directional, full duplex, messages to be
      instantly distributed with little overhead resulting in a very low latency connection

    blockingCode vs non-blockingCode
      Blocking is when the execution of additional JavaScript in the Node.js process must wait until
      a non-JavaScript operation completes.
  */

    const fs = require('fs');

    console.log('before (non blocking)');

    const callback = function(err, data) {
      console.log(data);
    }

    fs.readFile('./file/file.html', 'utf8', callback);
    fs.readFile('./file/file3.html', 'utf8', callback);

    console.log('after, probably (non blocking)');

    console.log('before (blocking)');

    const data = fs.readFileSync('./file/file2.html', 'utf8');

    console.log(data);

    console.log('after (blocking)');

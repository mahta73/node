  // The http module for your Node.js server

  const http = require('http');
  const port = 3000;

  // requestHeader will be invoked every time a request hits the server

  const requestHeader = (request, response) => {
    console.log(request.url);
    response.end('nodejs server');
  }

  const server = http.createServer(requestHeader);

  // error handling - if the port is already taken, or for any other reason
  // our server cannot start, we get notified here

  server.listen(port, err => {
    if (err) {
      return console.log(`some error occured ${err}`);
    }

    console.log(`server is listening on port ${port}`);
  });

  /*

  The http module is very low-level - creating a complex web application using the snippet above is
  very time-consuming. This is the reason why we usually pick a framework to work with for
  our projects. There are a lot you can pick from, but these are the most popular ones:

  express
  hapi
  koa
  restify

  */

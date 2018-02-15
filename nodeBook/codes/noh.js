  const myModule = require('./express3');
  const http = require('http'); // htttp is a module

  const mymodue = new myModule();

  mymodue.name('mahta', 'rezayazdi');

  mymodue.consoleLog();

  console.log(mymodue);

  // myModule.data.updateServer();
  //myModule.updateServer();

  //console.log(`current Url is ${myModule.currentUrl}`);

  //myModule.currentUrl = 'https://youtube.com'; // it will be changed every where, how to solve this???

  //console.log(`current Url is ${myModule.currentUrl}`);
  // console.log( myModule.secret );

  // console.log( myModule.notSecret ); // result -> This is not a secret information

  const port = 8080;

  const engine = function( req, res ) {
    // writeHead([status], {}[]);
    // The Content-Type header is technically optional, but then you are leaving it up
    // to the browser to essentially guess what type of content you are returning.
    // Generally you should always specify a Content-Type if you know the type
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('request from page: ' + req.url);

  };

  const server = http.createServer(engine);
  // every time the server receives a request from another computer on this port this function
  // fires up
  server.listen(port, function (err) {
    console.log('server was hit by a request');
  });

  // default for http port is 80
  // default for https port is 443

  // npm -> node package manager
  // nvm -> node version manager

  // npm ls -> all the local installed packages
  // npm ls -g -> all the global installed packages

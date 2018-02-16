  // express is a framework (node.js framework)
  // npm install express --sev
  // npm ls

  // express will return you a function, then you need to get this function
  const express = require('express');
  // path is a module from node
  const path = require('path');
  const fs = require('fs');

  const app = express();
  const port = 8080;

  console.log(__dirname); // __dirname -> current working directory

  // http://localhost:port/htmlFiles
  app.use('/htmlFiles', express.static('../file'));
  //app.use('/htmlFiles', express.static(__dirname + '/file'));

  // now express would wait for the user to visit url like '/helloThere'
  app.get('/helloThere', function(req, res) {
    res.send('Hello there from express');
  });


  app.get('/', function(reg, res) {
    // path.join() -> simply join two paths
    // res.send('what the hack is going on?');
    res.sendFile('index.html', {root: path.join(__dirname, '../file')}); // send file to the browser
  });

  // let's generalize this response for any page
  app.get(/^(.+)$/, function(req, res) {
    console.log(req.params);
    // res.sendFile('index2.html', {root: path.join(__dirname, '../file')});
    // check if the file exists???
    try {
      if ( fs.statSync( path.join(__dirname, '../file', req.params[0] + '.html') ).isFile() ) {
        res.sendFile(req.params[0] + '.html', {root: path.join(__dirname, '../file')});
      }
    } catch(err) {
      res.sendFile('404.html', {root: path.join(__dirname, '../file') });
    }

  });

  app.listen(port, function() {
    console.log(`listening at port ${port}`);
  });

  // cannot Get/ -> simple error message from express

  // express is a framework (node.js framework)
  // npm install express --sev
  // npm ls

  // express will return you a function, then you need to get this function
  const express = require('express');
  // path is a module from node
  const path = require('path');

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


  app.get('/indexHtml', function(reg, res) {
    // path.join() -> simply join two paths
    res.sendFile('index.html', {root: path.join(__dirname, '../file')}); // send file to the browser
  });

  app.listen(port, function() {
    console.log('listening at port ${port}');
  });

  // cannot Get/ -> simple error message from express

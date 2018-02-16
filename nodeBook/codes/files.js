  // how to read files

  const fs = require('fs');

  // reading a file
  fs.readFile('../file/file.html', 'utf8', function(err, data) {
    console.log(data);
  });
  // we have also fs.readFileSync()

  fs.writeFile('../file/mySecondFile', 'Hello there, node.js is really cool', 'utf8', function(err) {
      if (err) {
        console.log(err)
      }
      console.log('file written');
    });

  // Event and Eventemitter

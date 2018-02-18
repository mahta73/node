
  const express = require('express');
  const path = require('path');
  const fs = require('fs');
  const app = express();
  const port = 8080;
  // fs.readFile
  // fs.writeFile
  // fs.unlink
  // fs.rename
  // fs.stat

  // respond
  app.get(/^(.+)$/, (req, res) => {
    console.log(req.params);
    console.log(fs.statSync('../file/index.html', '../file/index.html'));
    res.sendFile('index.html', {root: path.join(__dirname, '../file')}); // this is the root file
  });

/*  fs.unlink('../file/mySecondFile', (err) => {
    console.log( (err ?  err : 'successfully deleted') );
  });

  // fs.writeFile(path, callbackfunction)
  // _NOTE: try { Sync } catch (err) { }

  fs.rename('../file/goodbye', '../file/hello', (err) => {
    console.log( err ? err : 'file renamed successfully');
  });

  fs.stat('../file/index2.html', (err, stats) =>  {
    console.log(`${JSON.stringify(stats)}`);
  });

  // To correctly order the operations, move the fs.stat() call into the callback of the fs.rename() operation:

  fs.rename('../file/myFile', '../file/yourfile', (err) => {
    if (err) throw err;
    fs.stat('../file/yourfile', (err, stats) => {
      if (err) throw err;
      console.log(`stat: ${JSON.stringify(stats)}`);
    })
  });
*/
  /*
  $ cat script.js
  function bad() {
  require('fs').readFile('/');
  }
  bad();

  $ env NODE_DEBUG=fs node script.js
  fs.js:88
        throw backtrace;
        ^
  Error: EISDIR: illegal operation on a directory, read
    <stack trace.>
  */

  function myFunction() {
    fs.readFile('../file/yourfile','utf8', (err, data) => { console.log( (err ? err : data ) ) });
  }
  
  myFunction();

  app.listen(port, (err) => {
    (err ? console.log(`error ${err}`) : console.log(`the server is listening on port ${port} `))
  });

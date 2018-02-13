  const fs = require('fs');

  console.log('start reading a file');

  // wrong file so we will have an error
   fs.readFile('../file/file.md', 'utf8', function(err, data) {
     if (err) {
       console.log('err happend');
       return console.log(err);
     }

     console.log(data);
   });

  console.log('end reading a file');

  /*
    THE EVENT LOOP
      The event loop is in the heart of Node.js / Javascript -
      it is responsible for scheduling asynchronous operations
      The event loops job is to look at the stack and look at the
      task queue.
      event loop has to wait till the stack is clear before it can
      push the callback on to the stack
  */

  // javascript promise

  /*
  Route definition takes the following structure:
  app.METHOD(PATH, HANDLER)

  Where:
  app is an instance of express.
  METHOD is an HTTP request method, in lowercase.
  PATH is a path on the server.
  HANDLER is the function executed when the route is matche
  */
  const express = require('express');
  const app = express();
  const port = 8080;

  app.get('/', (req, res) => {
    res.send('sending response'); // respond with 'sending response', on the homepage
  });

  app.post('/', (req, res) => {
    res.send('Got a POST request'); // Respond to POST request on the root route (/), the application’s home page:
  });

  //Respond to a PUT request to the /user route:

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  // Respond to a DELETE request to the /user route:

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })


  app.listen(port, err => {
    if (err) {
    console.log(err)
    }
    console.log('server is listening on port ' + port);
  });

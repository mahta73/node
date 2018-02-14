  /*
    Routing refers to how an application’s endpoints (URIs) respond to client requests.

    Route definition takes the following structure:
  */

  //  Express app
  /*
    const express = require('express');
    const app = express();
    app.get(path, (req, res) => res.send('sending response'));
    app.listen(port, (err) => console.log(err))
  */
  const express = require('express');
  const app = express();
  const port = 8080;

  app.get('/', (req, res) => res.send('sending response'));

  app.listen(port, err => {
    if (err) {
      console.log(`some error ${err}`)
    }
    console.log(`server listening on port ${port}`);
  });

  /*

    This app starts a server and listens on port 3000 for connections. The app responds with
    “sending response” for requests to the root URL (/) or route. For every other path, it will respond
    with a 404 Not Found.
    The example above is actually a working server.

    The express-generator package installs the express command-line tool. Use the following command to do so:
    $ npm install express-generator -g

    For example, the following creates an Express app named myapp.
    The app will be created in a folder named myapp in the current working directory and the
    view engine will be set to Pug:
    $ express --view=pug myapp

  */

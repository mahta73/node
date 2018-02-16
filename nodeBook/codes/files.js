  // how to read files

  const fs = require('fs');

  // fs.readFile(address, utf8, callbackfunction)
  // fs.writeFile(address, content, utf8, callbackfunction)

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

  const content = `
    <html>
      <head>
        <title>
          This is the title of the page
        </title>
      </head>
      <body>
        <h1>Legend is awesome</h1>
        <p> Is it gonna be over wriiten? yes it overwrites the exsiting file</p>
      </body>
    </html>
  `;

  fs.writeFile('../file/index2.html', content, 'utf8', function(err) {
    (err ? console.log(err) : console.log(`new file is added`));
  });

  const error404Content = `
  <html>
    <head>
      <title>
        This is the title of the page
      </title>
    </head>
    <body>
      <h1>ERROR ERROR ERROR ERROR ERROR ERROR ERROR</h1>
    </body>
  </html>
  `;

  fs.writeFile('../file/404.html', error404Content, 'utf8', (err) => ( err? console.log(err) : console.log(`404 error is added`) ) );

  /*
    Asynchronous I/O is a form of input/output processing
    that permits other processing to continue before the transmission has finished.
  */

  //sync

  const fs = require('fs');

  var content;
  try {
    // the content variable will contain the content of file.html
    content = fs.readFileSync('../file/file.html', 'utf8');
  } catch (error) {
    console.log(error); // error handling
  }

  console.log(content);

  /*
    fs.readFile('file', 'utf8', function(err, data) {
      if (err) {
        console.log(err); // error handling
      }

      console.log(data);
    });


    error-handling: instead of a try-catch block you have to check for errors in the callback
    no return value: async functions don't return values, but values will be passed to the
    callbacks

  */

  /*

    The problem with this approach is that Node.js will be blocked
    until the operation is finished -
    meaning it can do absolutely nothing while the file is being read

  */

  // Functions that can take other functions as arguments are called higher-order functions.

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var result = numbers.reduce((total, current) =>  total + current, 0);

  console.log('reduce() ' + result);

  /*

    The filter() method creates a new array with all elements that pass the test implemented
    by the provided function.

  */

  result = numbers.filter(function(current) {
    return ( current % 2 == 0 ? current : null);
  });

  console.log('filter()' + result);

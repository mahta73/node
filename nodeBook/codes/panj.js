  const async = require('async');
  const fs = require('fs');

  const myArr = [];

  const functionOne = function(callback) {
    // perform some tasks
    var err = null;
    callback(err, 'first function result');
  }

  const functionTwo = function(callback) {
    // perform some tasks
    var err = null;
    callback(err, 'second function result');
  }

  const functionThree = function(callback) {
    // perfom some tasks
    var err = null;
    callback(err, 'third funcion result');
  }

  myArr.push(functionOne);
  myArr.push(functionTwo);
  myArr.push(functionThree);

  console.log(myArr);

  async.parallel(myArr, function(err, result) {
    return console.log(result); // the result is array which contains the value of functions
  });

  const myObject = {};

  myObject.getUserName = function(callback) {
    var err = null;
    var userName = 'mahta';
    return callback(err, userName);
  }

  myObject.getUserAge = function(callback) {
    var err = null;
    var userAge = 23;
    return callback(err, userAge);
  }

  myObject.getUserGender = function(callback) {
    var err = null;
    var userGender = 'female';
    return callback(err, userGender);
  }

  async.parallel(myObject, function(err, results) {
    if (err) {
      console.log(err);
      return;
    }
    return console.log(results);
  });

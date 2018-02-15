  'use strict'
  /*
    BODY-PARSER:
      Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
      The middleware was a part of Express.js earlier but now you have to install it separately.
  */

  //var methods = {};
  /*
   // FIRST AND SECOND METHOD

  var methods = module.exports = {};

  const secret = `This is a secret information`;

  this.notSecret = `This is not a secret information`;

  methods.updateServer = function() {
    console.log('Import function');
  }

  methods.addNumbers = function(numberOne, numberTwo) {
    return numberOne + numberTwo;
  }

  methods.node = function() {
    console.log('nodejs is awsome');
  }

  methods.areaOfRectangle = function(a, b) {
    return a * b;
  }
  */

  /*
  // THIRD METHOD

  module.exports = {

    currentUrl: 'https://google.com',

    updateServer: function() {
      console.log('Import function');
    },

    addNumbers: function(numberOne, numberTwo) {
      return numberOne + numberTwo;
    },

    node: function(a, b) {
      return a * b;
    },
  }
  */

  // FORTH METHOD

  function construct_function() {
    let nameHolder;
    return {

      name: function(firstName, lastName) {
        nameHolder = firstName + ' ' + lastName;
      },

      consoleLog: function() {
        console.log(nameHolder);
      }

    }
  }

  module.exports = construct_function;
  // exports.data = methods;
  // exports.secret = secret;
  // module.exports -> nodejs automatically creates module.esports = exports = {}
  // module.exports.data = methods;

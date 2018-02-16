  // events and eventemitter

  const events = require('events');
  const eventEmitter = new events.EventEmitter();

  eventEmitter.on('my-custom-event', function(arg1, arg2) {
    console.log('event fired '+ arg1 + ' ' + arg2 + arguments.length);
  });

  // document.querySelector('yourTag').onClick = function() {}

  setTimeout(function() {
    eventEmitter.emit('my-custom-event', 'mahta', 'rezayazdi');
  }, 2000)

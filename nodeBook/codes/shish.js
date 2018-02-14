  // promises in javascript


  // immediately resolved

  var myPromis = Promise.resolve('immediately resolved');

  // to get a promis we can use then

  myPromis.then(res => console.log(res));

  var secondPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      return resolve(4);
    }, 5000);
  });

  secondPromise.then((res) => {
    res += 3;
    console.log(res);
  });

  /*

    deffered object
    promise object

  */

  var deferred = Promise.defer();
  console.log('my deferred = ');
  console.log(deferred);

  var promise = deferred.promise;

  console.log('promise inside the deferred = ');
  console.log(promise);

  console.log(Boolean(promise === deferred.promise));

  // promise and deferred has two functions that you can call : resolve, reject
  // resolve says that promise is no longer in progress (we have finishe and gotten a value)
  // we resolve a promise with a value and it can be any javascript value
  // after resolving a promise, promise updates its status to resolved and its value to the resolved value
  // and it trigers then function

  deferred.resolve('resolved ... :D ....');
  promise.then((value) => console.log(value));

  // now if we look at the promise its status is resolved

  console.log(promise);

  // when you reject a promise you usually pass a javascript erro object to it
  var secondDeferred = Promise.defer();
  var secondPromise = secondDeferred.promise;

  secondDeferred.reject('something went wrong');

  secondPromise.catch(error => console.log(`promise caught an error ${error.message}`));

  console.log(secondPromise);

  /*

    The Promise object is used for deferred and asynchronous computations.
    A Promise represents an operation that hasn't completed yet but is expected in the future.
    
  */

let promise = new Promise(function(resolve, reject) {
    // Do some asynchronous operation here
    setTimeout(function() {
      // If the operation was successful, call resolve()
      resolve('Success!');
      // If the operation failed, call reject()
      // reject('Failure!');
    }, 1000);
  });
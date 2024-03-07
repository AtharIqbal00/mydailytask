function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  greet('Alice', function() {
    console.log('The greeting has finished!');
  });
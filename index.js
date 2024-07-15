function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function");
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
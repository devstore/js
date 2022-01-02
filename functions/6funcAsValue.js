/*
no matter how the function is created, a function is a value.
Which means that we can copy a function to another variable:
*/
function sayHi(name) {   // (1) create
    console.log( "Hello " +name);
  }
  
  let func = sayHi;    // (2) copy
  
  func('a'); // Hello     // (3) run the copy (it works)!
  sayHi('b'); // Hello    //     this still works too (why wouldn't it)
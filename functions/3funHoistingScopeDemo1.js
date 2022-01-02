//function hoisting only works with function declarations—not with function expressions.
console.log(square);    // square is hoisted with an initial value undefined.
console.log(square(5)); // Uncaught TypeError: square is not a function
const square = function(n) {
  return n * n;
}
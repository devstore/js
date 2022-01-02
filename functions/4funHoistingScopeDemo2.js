//function hoisting only works with function declarations—not with function expressions.
console.log(square2(10));
function square2(x){
    return x*x;
}
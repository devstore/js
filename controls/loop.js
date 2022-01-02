
//for each
console.log("for each")
let fruits = ['apples', 'oranges', 'bananas'];
fruits.forEach(function(fruit) {
    console.log("I have " + fruit + " in my shopping bag");
});

//while
console.log("while")
let times = 0;
while (times < 10) {
  console.log(times);
  times = times + 1;
}

// do while
console.log("do while")
let times2 = 0;
do {
  console.log(times2);
  times2 = times2 + 1;
} while(times2 < 10)
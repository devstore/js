let now = new Date();
console.log (now);
console.log(now.getDay()); // 0, 1, 2
console.log(now.getMonth()); // 0, 1, 2
console.log(now.getDate()); //1, 2, 3, 4
console.log(now.getFullYear());
console.log(now.getHours()); //1, 2, 3, 4
console.log (now.getMinutes()); // 0,1,2, 12
console.log (now.getSeconds()); // 0,1,2, 12
console.log (now.getTime()); // epoch time

// create a date
let date = Date.parse("01 Jan 2025 00:00:00 GMT");

// get date data

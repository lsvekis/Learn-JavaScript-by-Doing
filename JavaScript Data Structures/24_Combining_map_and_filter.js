// 24. Combining map() and filter()

24. Combining map() and filter()
let numbers = [10, 3, 7, 20, 15];
let result = numbers
.filter(n => n > 5)
.map(n => n * 2);
console.log(result); // [20, 14, 40, 30]
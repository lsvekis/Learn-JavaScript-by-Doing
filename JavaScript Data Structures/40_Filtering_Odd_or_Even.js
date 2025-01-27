// 40. Filtering Odd or Even

Separate even/odd numbers using filter().
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);
n % 2 === 0 checks if a number is divisible by 2 (even).
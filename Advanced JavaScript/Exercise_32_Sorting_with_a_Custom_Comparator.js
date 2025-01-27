// Exercise 32: Sorting with a Custom Comparator

What You’ll Learn: Passing a function to sort() that decides the order.
Learning Objectives:
let arr = [10, 2, 15];
arr.sort((a, b) => a - b);
console.log(arr); // [2, 10, 15]
.sort() is a higher-order function that uses our comparator.
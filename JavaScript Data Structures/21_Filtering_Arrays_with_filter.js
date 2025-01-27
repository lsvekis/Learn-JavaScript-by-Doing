// 21. Filtering Arrays with filter()

21. Filtering Arrays with filter()
let numbers = [10, 15, 20, 25, 30];
let filtered = numbers.filter(n => n > 20);
console.log(filtered);
filter() runs the callback on each element; returns a new array of elements where the callback is true.